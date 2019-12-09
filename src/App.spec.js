import React from "react";
import { render } from "react-testing-library";
// adds extra matchers specific to testing dom
import "jest-dom/extend-expect";
// run code after each test that will clean up virtual dom so that there is no reminaing state between trests
import "react-testing-library/cleanup-after-each";

describe("App", () => {
  it("Renders without error", () => {
    render(<App />);
  });
});
