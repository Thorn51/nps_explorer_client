import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ParkList from "./ParkList";

import { GlobalProvider } from "../../context/GlobalState";

describe.skip("<ParkList />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <GlobalProvider>
        <ParkList />
      </GlobalProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<ParkList />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
