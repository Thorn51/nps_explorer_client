import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NoPage from "./NoPage";

describe("<NoPage />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NoPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<NoPage />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
