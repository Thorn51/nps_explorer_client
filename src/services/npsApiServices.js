import config from "../config";

const npsApiService = {
  // Get parks by 2 character state codes
  getParksByState(searchState) {
    // Send authorization header with api token
    const headers = {
      Authorization: config.NPS_API_TOKEN
    };
    // Form endpoint
    let baseUrl = `${config.NPS_API_BASE_URL}/parks?`;
    let queryParam = `&stateCode=${searchState}`;
    let endPoint = `${baseUrl}${queryParam}`;

    // Fetch the parks data from NPS api
    return fetch(endPoint, headers)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch parks");
        } else {
          return res.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  // Get news releases
  getNews() {
    // Send authorization header with api token
    const headers = {
      Authorization: config.NPS_API_TOKEN
    };
    // Form endpoint
    let baseUrl = `${config.NPS_API_BASE_URL}/newsreleases`;
    let qParamLimit = "?limit=10";
    let fetchUrl = baseUrl + qParamLimit;

    // Fetch the parks data from NPS api
    return fetch(fetchUrl, headers)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        } else {
          return res.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default npsApiService;
