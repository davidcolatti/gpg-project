import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { toHaveClass } from "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  it("should properly render the app component", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(container.children[0]).toHaveClass("App");
    expect(getByText("Authors Management")).not.toBeNull();
  });
});
