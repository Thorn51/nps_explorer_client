import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import "./LoginPage.css";

export default function LoginPage(props) {
  const { login } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);

    const credentials = {
      email,
      password,
    };

    login(credentials)
      .then(() => {
        setEmail("");
        setPassword("");
        props.history.goBack("/");
      })
      .catch((err) => {
        setErr(err);
      });
  };

  return (
    <>
      <Navigation />
      <Hero
        title="National Parks Explorer"
        tag="Login to your account"
        background="https://www.nps.gov/npgallery/GetAsset/34F574D2-1DD8-B71B-0BDE3EA69DD198E8/proxy/hires"
      />
      <main>
        <div className="form_container" onSubmit={handleSubmit}>
          <div className="demo_user">
            <h3 className="section_title">Demo User</h3>
            <hr />
            <p>Take a spin around NPS explorer with the demo user.</p>
            <p className="credentials">
              <span className="bold">Username:</span> demo.user@npsexplorer.com
            </p>
            <p className="credentials">
              <span className="bold">Password:</span> DemoUser1!
            </p>
          </div>
          <form className="login_form">
            <label htmlFor="login_email">Email:</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="login_email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label htmlFor="login_password">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="login_password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button type="submit" className="form_button">
              Login
            </button>
            {err && (
              <p className="alert">
                The email and or password submitted are incorrect.
              </p>
            )}
            <hr />
            <p>
              Do you need to create an account? Visit the {""}
              <Link to="/registration">registration page.</Link>.
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
