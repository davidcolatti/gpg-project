import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { toHaveClass } from "@testing-library/jest-dom";

import PostList from "../PostList";

test("PostList component properly renders", () => {
  const { container } = render(
    <BrowserRouter>
      <PostList
        match={{ params: 1 }}
        renderedPosts={[{ id: 1, title: "Post 1" }]}
      />
    </BrowserRouter>
  );

  expect(container.children[0]).toHaveClass("PostList");
});
