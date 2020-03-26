import config from "../config";

const explorerApiService = {
  getComments() {
    const headers = {
      Authorization: config.EXPLORER_API_TOKEN
    };

    let baseUrl = config.EXPLORER_BASE_URL;
    let endpoint = `/api/comments`;

    return fetch(baseUrl + endpoint, headers)
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
  }
};

export default explorerApiService;
