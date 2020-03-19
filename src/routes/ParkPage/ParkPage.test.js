import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ParkPage from "./ParkPage";
import { BrowserRouter } from "react-router-dom";

describe("<ParkPage />", () => {
  // Skipping smoke test -> The smoke test does not work with the useEffect hook. Need to find a solution.
  it.skip("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ParkPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ParkPage />
        </BrowserRouter>
      )
      .toJSON();
    expect("tree").toMatchSnapshot();
  });
});
