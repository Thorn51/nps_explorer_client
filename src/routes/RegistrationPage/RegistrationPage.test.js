import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import RegistrationPage from "./RegistrationPage";

describe("<RegistrationPage />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RegistrationPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<RegistrationPage />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
