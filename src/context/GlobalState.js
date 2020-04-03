import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import npsApiService from "../services/npsApiServices";
import AuthApiService from "../services/auth-api-service";
import TokenServices from "../services/token-service";
import ExplorerApiService from "../services/explorerApiServices";
import config from "../config";

// Initial state
const initialState = {
  searchState: [],
  parksInState: [],
  news: [],
  park: [],
  comments: [],
  favorites: [],
  error: null,
  loading: null,
  loadingNews: true,
  loadingPark: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action -> Select state and store it
  async function selectState(stateCode, stateName) {
    const stateDetails = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${stateName}.json?access_token=${config.MAP_TOKEN}`
    )
      .then(res => {
        if (!res.ok) {
          throw new Error("Fetch mapbox places failed");
        } else {
          return res.json();
        }
      })
      .catch(err => {
        console.log(err);
      });

    console.log(stateName, stateDetails);

    dispatch({
      type: "SEARCH_STATE",
      payload: stateDetails.features[0]
    });
  }

  // Action -> Fetch the parks by state code
  async function getParks(stateCode) {
    try {
      let parks = await npsApiService.getParksByState(stateCode);

      dispatch({
        type: "PARKS_IN_STATE",
        payload: parks.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Action -> Fetch news
  async function getNews() {
    try {
      let news = await npsApiService.getNews();
      dispatch({
        type: "NPS_NEWS",
        payload: news.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Action -> fetch park by park code for park page
  async function getParkByParkCode(parkCode) {
    try {
      let park = await npsApiService.getParkByCode(parkCode);
      dispatch({
        type: "PARK",
        payload: park.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Action -> add park to favorites
  async function addFavorite(newFavorite) {
    let favorite = await ExplorerApiService.postFavorite(newFavorite);
    try {
      dispatch({
        type: "ADD_FAVORITE",
        payload: favorite
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Action -> post user comment
  async function postComment(newComment) {
    const comment = await ExplorerApiService.postComment(newComment);
    try {
      dispatch({
        type: "POST_COMMENT",
        payload: comment
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Action -> Get all comments
  async function getComments() {
    let comments = await ExplorerApiService.getComments();
    try {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: comments
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Action -> Login
  async function login(credentials) {
    let user = await AuthApiService.postLogin(credentials);
    try {
      TokenServices.saveAuthToken(user.authToken);
    } catch (err) {
      console.log(err);
      dispatch({
        type: "ERROR",
        payload: err
      });
    }
  }

  // Action -> Get user favorites
  async function getFavorites() {
    let favorites = await ExplorerApiService.getFavorites();

    try {
      dispatch({
        type: "GET_FAVORITES",
        payload: favorites
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Action -> Edit favorite
  function patchFavorite(favoriteId, updateFavorite) {
    ExplorerApiService.patchFavorite(favoriteId, updateFavorite);

    // try {
    //   dispatch({
    //     type: "PATCH_FAVORITE",
    //     payload: update
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchState: state.searchState,
        parksInState: state.parksInState,
        news: state.news,
        park: state.park,
        error: state.error,
        loading: state.loading,
        loadingNews: state.loadingNews,
        loadingPark: state.loadingPark,
        comments: state.comments,
        favorites: state.favorites,
        loggedInUser: state.loggedInUser,
        selectState,
        getParks,
        getNews,
        getParkByParkCode,
        postComment,
        addFavorite,
        getComments,
        login,
        patchFavorite,
        getFavorites
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
