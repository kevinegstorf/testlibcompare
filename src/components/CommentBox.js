import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

const CommentBox = props => {
  const [comment, setComment] = React.useState();

  const textHandler = event => {
    setComment(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.saveComment(comment);
    setComment("");
  };

  return (
    <>
      <form data-testid="comment-box" onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          data-testid="text-area"
          aria-label="text-area"
          value={comment}
          onChange={textHandler}
        />
        <div>
          <button data-testid="comment-box-submit">Submit Comment</button>
        </div>
      </form>
      <button
        data-testid="comments-fetch"
        id="fetch-comments"
        onClick={props.fetchComments}
      >
        Fetch Comments
      </button>
    </>
  );
};

export default connect(null, actions)(CommentBox);
