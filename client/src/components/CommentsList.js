import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:5000/posts/${postId}/comments`
      );
      setComments(res.data);
    };
    if (postId) fetchData(0);
  }, [postId]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
};

export default CommentsList;
