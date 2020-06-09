import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
	return (
		<Fragment>
			<div className="item">
				<div className="right floated content">
					<i className="align justify" />
				</div>
				<Link to={`/post/id`} className="item-link" onClick={() => console.log('click posts')}>
					<div className="content">Post 1</div>
				</Link>
			</div>
		</Fragment>
	);
};

export default PostList;
