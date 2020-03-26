import config from "../config";

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.EXPLORER_BASE_URL}/api/auth/login`, {
      method: "Post",
      headers: {
        "content-type": "application/json",
        Authorization: config.EXPLORER_API_TOKEN
      },
      body: JSON.stringify(credentials)
    })
      .then(res => {
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
