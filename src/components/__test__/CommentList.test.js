import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

describe("Enzyme CommentList", () => {
  let wrapped;
  beforeEach(() => {
    const initialState = {
      comments: ["Comment 1", "Comment 2", "Comment 3"]
    };
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });
  it("creates one LI per comment", () => {
    expect(wrapped.find("li").length).toBe(3);
  });
  it("shows text for each comment", () => {
    expect(wrapped.find("ul").html()).toEqual(
      "<ul><li>Comment 1</li><li>Comment 2</li><li>Comment 3</li></ul>"
    );
    expect(wrapped.render().text()).toContain("Comment 1");
    expect(wrapped.render().text()).toContain("Comment 2");
    expect(wrapped.render().text()).toContain("Comment 3");
  });
});
