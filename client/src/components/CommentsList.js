import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <ul>
      {comments?.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
};

export default CommentsList;
