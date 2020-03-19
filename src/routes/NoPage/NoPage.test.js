import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NoPage from "./NoPage";
import { BrowserRouter } from "react-router-dom";

describe("<NoPage />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <NoPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NoPage />
        </BrowserRouter>
      )
      .toJSON();
    expect("tree").toMatchSnapshot();
  });
});
