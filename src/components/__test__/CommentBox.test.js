import React from "react";
import CommentBox from "components/CommentBox";
import Root from "Root";
import { mount } from "enzyme";
import { render } from "@testing-library/react";

describe("Enzyme CommentBox", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a text area and a button", () => {
    expect(wrapped.find("textarea").length).toBe(1);
    expect(wrapped.find("textarea").length).not.toBe(0);
    expect(wrapped.find("button").length).toBe(1);
    expect(wrapped.find("button").length).not.toBe(0);
  });

  describe("textarea behaviour", () => {
    let comment;
    beforeEach(() => {
      comment = "new comment";

      // simulate adding text to textarea
      wrapped.find("textarea").simulate("change", {
        target: { value: comment }
      });

      // trigger rerender to update with the new comment value
      wrapped.update();
    });
    it("has a text area that users can type in", () => {
      expect(wrapped.find("textarea").prop("value")).toEqual(comment);
      expect(wrapped.find("textarea").prop("value")).not.toEqual("");
      expect(wrapped.find("textarea").prop("value")).not.toEqual(undefined);
    });

    it("clears text area when submit button is presses", () => {
      // simulate form submit
      wrapped.find("form").simulate("submit");

      // trigger rerender to update with the new comment value
      wrapped.update();

      expect(wrapped.find("textarea").prop("value")).not.toEqual(comment);
      expect(wrapped.find("textarea").prop("value")).toEqual("");
      expect(wrapped.find("textarea").prop("value")).not.toEqual(undefined);
    });
  });
});
describe("Test Lib CommentBox", () => {
  it("has a text area and a button", () => {});
});
