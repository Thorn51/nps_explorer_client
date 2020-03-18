import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import HomePage from "./HomePage";

describe("<HomePage />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
