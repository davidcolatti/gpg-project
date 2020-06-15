import React from "react";

import styles from "./postModal.module.scss";

const PostModal = ({ selectedPost, toggleTrigger }) => {
  return (
    <div className={`${styles.PostModal} ui card`}>
      <div className={styles["modal-header"]}>
        <strong>{selectedPost?.title}</strong>
        <i
          onClick={toggleTrigger}
          className="right floated close icon modal-icon"
        />
      </div>
      <div className={styles["modal-description"]}>
        <p>{selectedPost?.body}</p>
      </div>
    </div>
  );
};

export default PostModal;
