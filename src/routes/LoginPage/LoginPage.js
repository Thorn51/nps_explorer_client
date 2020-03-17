import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <>
      <Navigation />
      <Hero
        title="National Parks Explorer"
        tag="Login"
        background="https://www.nps.gov/npgallery/GetAsset/34F574D2-1DD8-B71B-0BDE3EA69DD198E8/proxy/hires"
      />
      <main>
        <form className="login_form">
          <label htmlFor="login_email">Email:</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="login_email"
            required
          />
          <label htmlFor="login_password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="login_password"
            required
          />
          <button type="submit" className="form_button">
            Login
          </button>
        </form>
        <div className="form_redirect">
          <hr />
          <p>
            Do you need to create an account? Visit the {""}
            <Link to="/registration">registration page.</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
