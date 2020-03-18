import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import LoginPage from "./LoginPage";

describe("<LoginPage />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<LoginPage />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
