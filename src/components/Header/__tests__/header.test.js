import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Header from "../../Header";

test("Header component properly renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(getByText("Authors Management")).not.toBeNull();
});
