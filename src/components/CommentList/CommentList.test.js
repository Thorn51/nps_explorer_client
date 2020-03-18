import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CommentList from "./CommentList";

describe("<CommentList />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CommentList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<CommentList />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
