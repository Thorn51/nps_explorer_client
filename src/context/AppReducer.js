export default (state, action) => {
  switch (action.type) {
    case "SEARCH_STATE":
      return {
        ...state,
        searchState: action.payload,
        loading: true
      };
    case "PARKS_IN_STATE":
      return {
        ...state,
        parksInState: action.payload,
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
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case "POST_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case "GET_ALL_COMMENTS":
      return {
        ...state,
        comments: action.payload
      };
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
