import React, { useState, useEffect } from "react";
import PostList from "../PostList";
import Popup from "reactjs-popup";
import PostModal from "../PostModal";

import styles from "./mainArea.module.scss";

const MainArea = (props) => {
  const [posts, setPosts] = useState(null);
  const [renderedPosts, setRenderedPosts] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalTrigger, setModalTrigger] = useState(false);

  useEffect(() => {
    const postId = props.location.pathname.split("/post/")[1];

    if (postId) {
      console.log("it does", postId);
      var post = renderedPosts?.find((post) => post.id.toString() === postId);

      setSelectedPost(post);
    } else {
      setSelectedPost(null);
    }

    setModalTrigger(!!post);
  }, [props.location]);

  if (props.authorList) {
    let authorChosen = props.authorList.find((author) => {
      return author.id.toString() === props.match.params.id;
    });

    props.setAuthorSelected(authorChosen);
  }

  const toggleTrigger = () => {
    if (modalTrigger) {
      setSelectedPost(null);
      props.history.goBack();
    }
    setModalTrigger((prev) => !prev);
  };

  const loadMorePostsBtn = () => {
    if (renderedPosts.length < posts.length) {
      setRenderedPosts((prevPosts) => posts.slice(0, prevPosts.length + 1));
    }
  };

  const modalClose = () => {
    if (modalTrigger) {
      setSelectedPost(null);
      props.history.goBack();
    }
  };

  return (
    <div className={styles.MainArea}>
      <Popup
        // className={styles["popup-content"]}
        onClose={modalClose}
        modal
        open={modalTrigger}
      >
        {() => (
          <PostModal
            setModalTrigger={setModalTrigger}
            modalClose={modalClose}
            toggleTrigger={toggleTrigger}
            history={props.history}
            selectedPost={selectedPost}
          />
        )}
      </Popup>

      <div className="main-top-div">
        <div className={styles["main-top-content"]}>
          <span className={styles["top-content-left"]}>
            <strong>{props.authorSelected?.name}</strong>
            <br />
            <i>{props.authorSelected?.username}</i>
          </span>
          <span className={styles["top-content-right"]}>
            {props.authorSelected?.email}
          </span>
        </div>
        <div className={styles["main-top-contact"]}>
          <span>
            <strong>Contact</strong>
            <br />
            {`${props.authorSelected?.address.suite} ${props.authorSelected?.address.street}`}
            <br />
            {`${props.authorSelected?.address.city}, ${props.authorSelected?.address.zipcode}`}
            <br />
            {props.authorSelected?.phone}
          </span>
        </div>
      </div>
      <div className="main-bottom-div">
        <div className={styles["post-list-title"]}>
          <span className={styles["left-title"]}>
            <strong>Post List by {props.authorSelected?.name}</strong>
          </span>
          <span className={styles["right-title"]}>
            Total posts {renderedPosts?.length}
          </span>
        </div>
        {/* <div className="post-list segment ui middle aligned divided list"> */}
        <PostList
          setSelectedPost={setSelectedPost}
          toggleTrigger={toggleTrigger}
          renderedPosts={renderedPosts}
          setPosts={setPosts}
          setRenderedPosts={setRenderedPosts}
          {...props}
        />
        {/* </div> */}
        <div className={styles["posts-button-div"]}>
          {renderedPosts?.length < posts?.length && (
            <button onClick={loadMorePostsBtn} className="ui button">
              Load More Posts
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainArea;
