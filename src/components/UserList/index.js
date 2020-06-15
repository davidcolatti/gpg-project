import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./userList.module.scss";

const UserList = ({ authorList, setAuthorSelected }) => {
  console.log(styles);

  const displayAuthorList = () => {
    if (authorList) {
      return authorList.map((author) => {
        return (
          <Fragment className={styles.author}>
            <div className={`item ${styles["item-user"]}`}>
              <div className={`right floated content ${styles.content}`}>
                <i className="chevron right icon" />
              </div>
              <Link
                to={`/author/${author.id}`}
                className={styles["item-user-link"]}
                onClick={() => setAuthorSelected(author)}
              >
                <div className={`content ${styles.content}`}>{author.name}</div>
              </Link>
            </div>
          </Fragment>
        );
      });
    } else {
      return <div>NO AUTHOR</div>;
    }
  };

  return (
    <div
      className={`segment ui middle aligned divided list ${styles.UserList} ${styles.segmentOveride}`}
    >
      {displayAuthorList()}
    </div>
  );
};

export default UserList;
