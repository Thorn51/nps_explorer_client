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
  },
  hasAuthToken() {
    return !!TokenServices.getAuthToken();
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.EXPLORER_API_TOKEN);
  },
  getUsersDetails(token) {
    const loggedInUser = jwtDecode(token);
    return loggedInUser;
  }
};
