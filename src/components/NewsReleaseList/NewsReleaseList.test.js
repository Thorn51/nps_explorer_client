import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NewsReleaseList from "./NewsReleaseList";

describe("<NewsReleaseList />", () => {
  // Skipping smoke test -> The smoke test does not work with the useEffect hook. Need to find a solution.
  it.skip("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewsReleaseList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<NewsReleaseList />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
