import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

describe("Enzyme comments reducer", () => {
  it("handles actions of type SAVE_COMMENT", () => {
    const comment = "New Comment";
    const action = {
      type: SAVE_COMMENT,
      payload: comment
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual([comment]);
    expect(newState).not.toEqual(undefined);
    expect(newState).not.toEqual([""]);
  });

  it("handles action with unknown type", () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
    expect(newState).not.toEqual(undefined);
  });
});
