import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import StateSelector from "./StateSelector";

describe("<StateSelector />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<StateSelector />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<StateSelector />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
