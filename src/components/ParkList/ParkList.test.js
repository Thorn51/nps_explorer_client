import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ParkList from "./ParkList";

describe("<ParkList />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ParkList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<ParkList />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
