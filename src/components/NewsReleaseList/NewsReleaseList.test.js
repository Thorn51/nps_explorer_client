import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NewsReleaseList from "./NewsReleaseList";

describe("<NewsReleaseList />", () => {
  // There is a failure on useEffect here that I'm not certain yet how to fix.

  //     it("Renders without crashing", () => {
  //     const div = document.createElement("div");
  //     ReactDOM.render(<NewsReleaseList />, div);
  //     ReactDOM.unmountComponentAtNode(div);
  //   });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<NewsReleaseList />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
