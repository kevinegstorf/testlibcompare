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
    <form data-testid="comment-box" onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={textHandler} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, actions)(CommentBox);
