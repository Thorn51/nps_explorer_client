import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import "./RegistrationPage.css";

export default function RegistrationPage() {
  return (
    <>
      <Navigation />
      <Hero
        title="National Parks Explorer"
        tag="Register for an account today!"
        background="https://www.nps.gov/npgallery/GetAsset/268E719A-155D-451F-675B13A1AC17C77E/proxy/hires"
      />
      <main>
        <div className="form_container">
          <form className="registration_form">
            <label htmlFor="registration_first_name">First Name:</label>
            <input
              type="text"
              name="first_name"
              id="registration_first_name"
              placeholder="Enter First Name"
              required
            />
            <label htmlFor="registration_last_name">Last Name:</label>
            <input
              type="text"
              name="last_name"
              id="registration_last_name"
              placeholder="Enter Last Name"
              required
            />
            <label htmlFor="registration_email">Email:</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="registration_email"
              required
            />
            <label htmlFor="registration_password">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="registration_password"
              required
            />
            <label htmlFor="registration_repeat_password">
              Repeat Password:
            </label>
            <input
              type="password"
              name="repeat_password"
              id="registration_repeat_password"
              placeholder="Repeat Password"
              required
            />
            <button type="submit" className="form_button">
              Register
            </button>
            <hr />
            <p>
              Do you already have an account? Visit the{" "}
              <Link to="/login">login page.</Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
