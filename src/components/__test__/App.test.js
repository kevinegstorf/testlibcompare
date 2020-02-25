import React from "react";
import App from "components/App";
import Root from "Root";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

describe("Enzyme App component", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });
  it("renders a comment block", () => {
    expect(wrapped.find(CommentBox).length).toBe(1);
    expect(wrapped.find(CommentBox).length).not.toBe(0);
  });
  it("renders a comment list", () => {
    expect(wrapped.find(CommentList).length).toBe(1);
    expect(wrapped.find(CommentList).length).not.toBe(0);
  });
});

describe("Test Lib App component", () => {
  let component;
  beforeEach(() => {
    component = dataId => {
      const { getAllByTestId } = render(
        <Root>
          <App />
        </Root>
      );
      return getAllByTestId(dataId);
    };
  });
  it("renders a comment block", () => {
    const commentBlock = component("comment-box");
    expect(commentBlock.length).toBe(1);
    expect(commentBlock.length).not.toBe(0);
  });
  it("renders a comment list", () => {
    const commentBlock = component("comment-list");
    expect(commentBlock.length).toBe(1);
    expect(commentBlock.length).not.toBe(0);
  });
});
