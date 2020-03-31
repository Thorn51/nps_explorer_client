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
        throw new Error("The email and or password provided are incorrect");
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
    }).then(res => {
      if (!res.ok) {
        throw new Error("Bad Request");
      } else {
        res.json();
      }
    });
  }
};

export default AuthApiService;
