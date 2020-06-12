import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PostList from "./PostList";
import Popup from "reactjs-popup";
import PostModal from "./PostModal";

const MainArea = (props) => {
  let location = useLocation();
  // console.log(location);

  const [posts, setPosts] = useState(null);
  const [renderedPosts, setRenderedPosts] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalTrigger, setModalTrigger] = useState(false);

  if (props.authorList) {
    let authorChosen = props.authorList.find((author) => {
      return author.id.toString() === props.match.params.id;
    });

    props.setAuthorSelected(authorChosen);
  }

  const toggleTrigger = () => {
    if (modalTrigger) setSelectedPost(null);
    setModalTrigger((prev) => !prev);
  };

  const loadMorePostsBtn = () => {
    if (renderedPosts.length < posts.length) {
      setRenderedPosts((prevPosts) => posts.slice(0, prevPosts.length + 1));
    }
  };

  const modalClose = () => {
    if (modalTrigger) setSelectedPost(null);
    props.history.goBack();
    setModalTrigger(false);
  };

  return (
    <div className="MainArea">
      <Popup onClose={modalClose} modal open={modalTrigger}>
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
        <div className="main-top-content">
          <span className="top-content-left">
            <strong>{props.authorSelected?.name}</strong>
            <br />
            <i>{props.authorSelected?.username}</i>
          </span>
          <span className="top-content-right">
            {props.authorSelected?.email}
          </span>
        </div>
        <div className="main-top-contact">
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
        <div className="post-list-title">
          <span className="left-title">
            <strong>Post List by {props.authorSelected?.name}</strong>
          </span>
          <span className="right-title">
            Total posts {renderedPosts?.length}
          </span>
        </div>
        <div className="post-list segment ui middle aligned divided list">
          <PostList
            setSelectedPost={setSelectedPost}
            toggleTrigger={toggleTrigger}
            renderedPosts={renderedPosts}
            setPosts={setPosts}
            setRenderedPosts={setRenderedPosts}
            {...props}
          />
        </div>
        <div className="posts-button-div">
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
