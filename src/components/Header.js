import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="Header ui segment">
			<div className="ui breadcrumb">
				<Link to="/" className="section">
					Authors Management
				</Link>
				<div className="divider"> / </div>
				<Link to="/detail/123" className="section">
					Name
				</Link>
			</div>
		</div>
	);
};

export default Header;
