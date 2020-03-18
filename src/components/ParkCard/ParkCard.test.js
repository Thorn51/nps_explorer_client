import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ParkCard from "./ParkCard";

describe("<ParkCard />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ParkCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<ParkCard />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
