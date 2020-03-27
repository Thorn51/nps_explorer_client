import config from "../config";
import TokenServices from "./token-service";

const ExplorerApiService = {
  // Get all comments
  getComments() {
    let baseUrl = config.EXPLORER_BASE_URL;
    let endpoint = `/api/comments`;

    return fetch(baseUrl + endpoint, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.EXPLORER_API_TOKEN}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch comments");
        } else {
          return res.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  // Post a new comment to database
  postComment(newComment) {
    let baseUrl = config.EXPLORER_BASE_URL;
    let endpoint = `/api/comments`;

    return fetch(baseUrl + endpoint, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to post comment");
        } else {
          return res.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  // Get all favorites
  getFavorites() {
    let baseUrl = config.EXPLORER_BASE_URL;
    let endpoint = `/api/favorites`;

    return fetch(baseUrl + endpoint, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch favorites");
        } else {
          return res.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  // Post a favorite to database
  postFavorite(favorite) {
    let baseUrl = config.EXPLORER_BASE_URL;
    let endpoint = `/api/favorites`;

    return fetch(baseUrl + endpoint, {
      method: "POST",
      body: JSON.stringify(favorite),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to post favorite");
        } else {
          return res.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  // Edit favorite in database
  patchFavorite(favoriteId, updateFavorite) {
    let baseUrl = config.EXPLORER_BASE_URL;
    let endpoint = `/api/favorites/${favoriteId}`;

    return fetch(baseUrl + endpoint, {
      method: "PATCH",
      body: JSON.stringify(updateFavorite),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to patch favorite");
        } else {
          return res.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default ExplorerApiService;
