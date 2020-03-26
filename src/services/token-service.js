import config from "../config";
import jwtDecode from "jwt-decode";

const TokenServices = {
  makeBasicAuthToken(username, password) {
    return window.btoa(`${username}:${password}`);
  },
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.EXPLORER_API_TOKEN, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.EXPLORER_API_TOKEN);
  }
};
