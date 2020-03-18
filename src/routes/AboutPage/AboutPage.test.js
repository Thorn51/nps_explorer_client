import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import AboutPage from "./AboutPage";

describe("<AboutPage />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AboutPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<AboutPage />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
