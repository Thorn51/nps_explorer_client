import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import AboutPage from "./AboutPage";
import { BrowserRouter } from "react-router-dom";

describe("<AboutPage />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <AboutPage />
        </BrowserRouter>
      )
      .toJSON();
    expect("tree").toMatchSnapshot();
  });
});
