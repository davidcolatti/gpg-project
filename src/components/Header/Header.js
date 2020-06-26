import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";

const Header = ({ authorSelected, setAuthorSelected }) => {
  return (
    <div className={`Header ui segment ${styles.segmentOveride}`}>
      <div className="ui breadcrumb">
        <Link
          to="/"
          onClick={() => setAuthorSelected(null)}
          className={`section ${styles.headerLink}`}
        >
          Authors Management
        </Link>
        <div className="divider"> / </div>
        <Link
          to={`/author/${authorSelected?.id}`}
          className={`section ${styles.headerLink}`}
        >
          {authorSelected?.name}
        </Link>
      </div>
    </div>
  );
};

export default Header;
