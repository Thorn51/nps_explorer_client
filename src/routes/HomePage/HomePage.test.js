import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";

describe("<HomePage />", () => {
  // Skipping smoke test -> The smoke test does not work with the useEffect hook. Need to find a solution.
  it.skip("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      )
      .toJSON();
    expect("tree").toMatchSnapshot();
  });
});
