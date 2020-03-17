import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import npsApiService from "../services/npsApiServices";

// Initial state
const initialState = {
  searchState: [],
  parksInState: [],
  news: [],
  park: [],
  error: null,
  loading: null
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
        payload: error.response.data
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
        payload: error.response.data
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchState: state.searchState,
        parksInState: state.parksInState,
        news: state.news,
        error: state.error,
        loading: state.loading,
        selectState,
        getParks,
        getNews
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
