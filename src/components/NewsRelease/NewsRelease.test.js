import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NewsRelease from "./NewsRelease";

describe("<NewsRelease />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewsRelease />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<NewsRelease />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
