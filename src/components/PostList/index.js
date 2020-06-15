import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./postList.module.scss";

const PostList = (props) => {
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      let filteredRes = res.data.filter((post) => {
        return post.userId.toString() === props.match.params.id;
      });

      props.setPosts(filteredRes);
      props.setRenderedPosts(filteredRes.slice(0, 6));
    }
    fetchData();
  }, [props.authorSelected]);

  const handleOnPostClick = (post) => {
    props.setSelectedPost(post);

    props.toggleTrigger();
  };

  const displayPostList = () => {
    return props.renderedPosts.map((post) => {
      if (post)
        return (
          <div className={`item ${styles["post-item"]}`}>
            <Link
              to={`${props.match.params.id}/post/${post.id}`}
              className={styles["item-link"]}
              onClick={() => handleOnPostClick(post)}
            >
              <div className="right floated content">
                <i className="align justify icon" />
              </div>
              <div className="content">{post.title}</div>
            </Link>
          </div>
        );
    });
  };

  return (
    <div
      className={`${styles.PostList} segment ui middle aligned divided list`}
    >
      {props.renderedPosts && displayPostList()}
    </div>
  );
};

export default PostList;
