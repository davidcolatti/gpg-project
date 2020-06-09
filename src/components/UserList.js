import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ authorList, setAuthorSelected }) => {
	if (authorList) {
		return authorList.map((author) => {
			return (
				<Fragment>
					<div className="item item-user">
						<div className="right floated content">
							<i className="chevron right icon" />
						</div>
						<Link
							to={`/author/${author.id}`}
							className="item-user-link"
							onClick={() => setAuthorSelected(author)}
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
