import React from "react";
import CommentBox from "components/CommentBox";
import Root from "Root";
import { mount } from "enzyme";
import { render, fireEvent } from "@testing-library/react";

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

  it("has a text area and two buttons", () => {
    expect(wrapped.find("textarea").length).toBe(1);
    expect(wrapped.find("textarea").length).not.toBe(0);
    expect(wrapped.find("button").length).toBe(2);
    expect(wrapped.find("button").length).not.toBe(0);
  });

  describe("Enzyme textarea behaviour", () => {
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
  it("has a text area and a button", () => {
    const { getAllByTestId } = render(
      <Root>
        <CommentBox />
      </Root>
    );
    const submit = getAllByTestId("comment-box-submit");
    const fetch = getAllByTestId("comments-fetch");
    const textArea = getAllByTestId("text-area");

    expect(submit.length).toBe(1);
    expect(submit.length).not.toBe(0);
    expect(fetch.length).toBe(1);
    expect(fetch.length).not.toBe(0);
    expect(textArea.length).toBe(1);
    expect(textArea.length).not.toBe(0);
  });

  describe("Test Lib textarea behaviour", () => {
    it("has a text area that users can type in and clears text area when submit button is pressed", () => {
      const comment = "new comment";

      const { getByTestId } = render(
        <Root>
          <CommentBox />
        </Root>
      );

      const textArea = getByTestId("text-area");
      const form = getByTestId("comment-box");
      textArea.value = comment;

      fireEvent.change(textArea);

      expect(textArea.value).toBe(comment);
      expect(textArea.value).not.toBe("");
      expect(textArea.value).not.toBe(undefined);

      fireEvent.submit(form);

      expect(textArea.value).not.toBe(comment);
      expect(textArea.value).toBe("");
      expect(textArea.value).not.toBe(undefined);
    });
  });
});
