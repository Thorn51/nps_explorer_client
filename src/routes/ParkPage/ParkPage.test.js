import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ParkPage from "./ParkPage";

describe("<ParkPage />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ParkPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<ParkPage />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
