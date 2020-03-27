import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import npsApiService from "../services/npsApiServices";
import AuthApiService from "../services/auth-api-service";
import TokenServices from "../services/token-service";
import ExplorerApiService from "../services/explorerApiServices";

// Initial state
const initialState = {
  searchState: [],
  parksInState: [],
  news: [],
  park: [],
  favorite: [],
  comments: [],
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
  function selectState(stateCode, stateName) {
    dispatch({
      type: "SEARCH_STATE",
      payload: { stateCode, stateName }
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
      dispatch({
        type: "FETCH_PARKS_ERROR",
        payload: error
      });
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
      dispatch({
        type: "FETCH_NEWS_ERROR",
        payload: error
      });
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
      dispatch({
        type: "PARK_FETCH_ERROR",
        payload: error
      });
    }
  }

  // Action -> add park to favorites
  function addFavorite(favoritePark) {
    dispatch({
      type: "ADD_FAVORITE",
      payload: favoritePark
    });
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
    } catch (error) {
      console.log(error);
    }
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
        favorite: state.favorite,
        loggedInUser: state.loggedInUser,
        selectState,
        getParks,
        getNews,
        getParkByParkCode,
        postComment,
        addFavorite,
        getComments,
        login
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
