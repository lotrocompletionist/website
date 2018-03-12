import * as React from "react";
import { create } from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";

test("<Header> renders correctly", () => {
  const tree = create(
    <Router>
      <Header />
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
