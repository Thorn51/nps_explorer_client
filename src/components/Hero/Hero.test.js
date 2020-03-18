import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Hero from "./Hero";

describe("<Hero />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hero />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
