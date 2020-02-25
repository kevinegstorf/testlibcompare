import React from "react";
import { connect } from "react-redux";

function CommentList(props) {
  const renderComments = () => {
    return props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  };
  return (
    <div data-testid="comment-list">
      <ul>{renderComments()}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { comments: state.comments };
}
export default connect(mapStateToProps, null)(CommentList);
