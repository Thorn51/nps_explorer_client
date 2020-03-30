import React, { useContext } from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CommentList from "./CommentList";
import { GlobalProvider } from "../../context/GlobalState";

describe("<CommentList />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <GlobalProvider>
        <CommentList />
      </GlobalProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<CommentList />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
