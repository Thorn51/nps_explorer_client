import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import UserInteractions from "./UserInteractions";

describe.skip("<UserInteractions />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserInteractions />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<UserInteractions />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
