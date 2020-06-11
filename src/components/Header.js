import React from "react";
import { Link } from "react-router-dom";

const Header = ({ authorSelected, setAuthorSelected }) => {
  return (
    <div className="Header ui segment">
      <div className="ui breadcrumb">
        <Link
          to="/"
          onClick={() => setAuthorSelected(null)}
          className="section"
        >
          Authors Management
        </Link>
        <div className="divider"> / </div>
        <Link to={`/author/${authorSelected?.id}`} className="section">
          {authorSelected?.name}
        </Link>
      </div>
    </div>
  );
};

export default Header;
