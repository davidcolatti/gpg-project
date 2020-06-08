import React, { Fragment } from 'react';

const UserList = ({ authorList }) => {
	if (authorList) {
		return authorList.map((author) => {
			return (
				<Fragment>
					<div className="item">
						<div className="right floated content">
							<i className="chevron right icon" />
						</div>
						<div className="content">{author.name}</div>
					</div>
				</Fragment>
			);
		});
	} else {
		return <div>NO USER</div>;
	}
};

export default UserList;
