import config from "../config";

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.EXPLORER_BASE_URL}/api/auth/login`, {
      method: "Post",
      headers: {
        "content-type": "application/json",
        Authorization: `basic ${config.EXPLORER_API_TOKEN}`
      },
      body: JSON.stringify(credentials)
    }).then(res => {
      if (!res.ok) {
        throw new Error("Login attempt failed");
      } else {
        return res.json();
      }
    });
  },

  postRegistration(newUser) {
    return fetch(`${config.EXPLORER_BASE_URL}/api/users`, {
      method: "Post",
      headers: {
        "content-type": "application/json",
        Authorization: `basic ${config.EXPLORER_API_TOKEN}`
      },
      body: JSON.stringify(newUser)
    })
      .then(res => {
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default AuthApiService;
