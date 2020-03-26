import config from "../config";
import jwtDecode from "jwt-decode";

const TokenServices = {
  makeBasicAuthToken(username, password) {
    return window.btoa(`${username}:${password}`);
  }
};
