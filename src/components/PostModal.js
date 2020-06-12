import React, { useEffect } from "react";

const PostModal = ({ selectedPost, toggleTrigger }) => {
  return (
    <div className="PostModal ui card">
      <div className="modal-header">
        <strong>{selectedPost?.title}</strong>
        <i
          onClick={toggleTrigger}
          className="right floated close icon modal-icon"
        />
      </div>
      <div className="modal-description">
        <p>{selectedPost?.body}</p>
      </div>
    </div>
  );
};

export default PostModal;
