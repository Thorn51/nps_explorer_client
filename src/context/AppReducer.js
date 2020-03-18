export default (state, action) => {
  switch (action.type) {
    case "SEARCH_STATE":
      return {
        ...state,
        searchState: [action.payload],
        loading: true
      };
    case "PARKS_IN_STATE":
      return {
        ...state,
        parksInState: [action.payload],
        loading: false
      };
    case "NPS_NEWS":
      return {
        ...state,
        news: [action.payload],
        loadingNews: false
      };
    case "PARK":
      return {
        ...state,
        park: action.payload[0],
        loadingPark: false
      };
    case "FETCH_PARKS_ERROR":
      return {
        ...state,
        error: action.payload
      };
    case "FETCH_NEWS_ERROR":
      return {
        ...state,
        error: action.payload
      };
    case "FETCH_PARK_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
