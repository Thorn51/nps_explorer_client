import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ParkCard from "./ParkCard";
import { BrowserRouter } from "react-router-dom";

describe("<ParkCard />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <ParkCard />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ParkCard />
        </BrowserRouter>
      )
      .toJSON();
    expect("tree").toMatchSnapshot();
  });
});
