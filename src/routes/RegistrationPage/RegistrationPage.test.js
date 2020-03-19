import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import RegistrationPage from "./RegistrationPage";
import { BrowserRouter } from "react-router-dom";

describe("<RegistrationPage />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <RegistrationPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <RegistrationPage />
        </BrowserRouter>
      )
      .toJSON();
    expect("tree").toMatchSnapshot();
  });
});
