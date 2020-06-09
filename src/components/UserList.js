import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ state, setAuthorToState }) => {
	if (state.authorList) {
		return state.authorList.map((author) => {
			return (
				<Fragment>
					<div className="item">
						<div className="right floated content">
							<i className="chevron right icon" />
						</div>
						<Link
							to={`/author/${author.id}`}
							className="item-link"
							onClick={() => setAuthorToState(author)}
						>
							<div className="content">{author.name}</div>
						</Link>
					</div>
				</Fragment>
			);
		});
	} else {
		return <div>NO AUTHOR</div>;
	}
};

export default UserList;
