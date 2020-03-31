import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import "./RegistrationPage.css";
import AuthApiService from "../../services/auth-api-service";
import ValidationError from "../../components/ValidationError/ValidationError";

export default function RegistrationPage(props) {
  const [input, setInput] = useState({
    firstName: {
      value: "",
      touched: false
    },
    lastName: {
      value: "",
      touched: false
    },
    email: {
      value: "",
      touched: false
    },
    password: {
      value: "",
      touched: false
    },
    repeatPassword: {
      value: "",
      touched: false
    }
  });
  const [err, setError] = useState();

  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: {
        value: e.currentTarget.value,
        touched: true
      }
    });

  const handleSubmit = e => {
    e.preventDefault();
    setError(null);

    const newUser = {
      firstName: input.firstName.value,
      lastName: input.lastName.value,
      email: input.email.value,
      password: input.password.value
    };

    AuthApiService.postRegistration(newUser)
      .then(() => {
        setInput({
          firstName: {
            value: "",
            touched: false
          },
          lastName: {
            value: "",
            touched: false
          },
          email: {
            value: "",
            touched: false
          },
          password: {
            value: "",
            touched: false
          },
          repeatPassword: {
            value: "",
            touched: false
          }
        });
        props.history.push("/login");
      })
      .catch(res => {
        setError(
          "The email is already in use. Do you already have an account?"
        );
      });
  };

  const validateFirstName = () => {
    const firstName = input.firstName.value.trim();
    if (firstName.length === 0) {
      return "First name is required.";
    }
  };

  const validateLastName = () => {
    const lastName = input.lastName.value.trim();
    if (lastName.length === 0) {
      return "Last name is required";
    }
  };

  const validateEmail = () => {
    const email = input.email.value.trim();
    if (email.length === 0) {
      return "Email is required.";
    } else if (
      // Regex Email Validation as per RFC2822 standards from regexr.com -> RFC2822 Email Verification
      !email.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
      )
    ) {
      return "Please enter a valid e-mail address.";
    }
  };

  const validatePassword = () => {
    const password = input.password.value.trim();
    if (password.length === 0) {
      return "Password is required.";
      //Regex ensures that password is 8 to 64 characters long and contains a mix of upper and lower case characters, one numeric and one special character from regexr.com -> Strong Password Validator
    } else if (
      !password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g)
    ) {
      return "Password must be 8 to 64 characters long and contains a mix of upper and lower case characters, one numeric and one special character.";
    }
  };

  const validateRepeatPassword = () => {
    const password = input.password.value.trim();
    const repeatPassword = input.repeatPassword.value.trim();
    if (repeatPassword !== password) {
      return "Passwords do not match.";
    }
  };

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
          <form className="registration_form" onSubmit={handleSubmit}>
            <label htmlFor="registration_first_name">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="registration_first_name"
              placeholder="Enter First Name"
              onChange={handleInputChange}
              value={input.firstName.value}
              required
            />
            {input.firstName.touched && (
              <ValidationError message={validateFirstName()} />
            )}
            <label htmlFor="registration_last_name">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="registration_last_name"
              placeholder="Enter Last Name"
              onChange={handleInputChange}
              value={input.lastName.value}
              required
            />
            {input.lastName.touched && (
              <ValidationError message={validateLastName()} />
            )}
            <label htmlFor="registration_email">Email:</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="registration_email"
              onChange={handleInputChange}
              value={input.email.value}
              required
            />
            {input.email.touched && (
              <ValidationError message={validateEmail()} />
            )}
            <label htmlFor="registration_password">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="registration_password"
              onChange={handleInputChange}
              value={input.password.value}
              required
            />
            {input.password.touched && (
              <ValidationError message={validatePassword()} />
            )}
            <label htmlFor="registration_repeat_password">
              Repeat Password:
            </label>
            <input
              type="password"
              name="repeatPassword"
              id="registration_repeat_password"
              placeholder="Repeat Password"
              onChange={handleInputChange}
              value={input.repeatPassword.value}
              required
            />
            {input.repeatPassword.touched && (
              <ValidationError message={validateRepeatPassword()} />
            )}
            <button
              type="submit"
              className="form_button"
              disabled={
                validateFirstName() ||
                validateLastName() ||
                validateEmail() ||
                validatePassword() ||
                validateRepeatPassword()
              }
            >
              Register
            </button>
            {err && <p className="alert">{err}</p>}
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
