import React from "react";
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
        <form class="login_form">
          <label for="login_email">Email:</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="login_email"
            required
          />
          <label for="login_password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="login_password"
            required
          />
          <button type="submit" class="form_button">
            Login
          </button>
        </form>
        <div class="form_redirect">
          <hr />
          <p>
            Do you need to create an account? Visit the
            <a href="#registration">registration page</a>.
          </p>
        </div>
      </main>
    </>
  );
}
