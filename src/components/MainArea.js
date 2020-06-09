import React from 'react';
import PostList from './PostList';

const MainArea = ({ authorSelected }) => {
	return (
		<div className="MainArea">
			<div className="main-top-div">
				<div className="main-top-content">
					<span className="top-content-left">
						<strong>{authorSelected?.name}</strong>
						<br />
						<i>{authorSelected?.username}</i>
					</span>
					<span className="top-content-right">{authorSelected?.email}</span>
				</div>
				<div className="main-top-contact">
					<span>
						<strong>Contact</strong>
						<br />
						{`${authorSelected?.address.suite} ${authorSelected?.address.street}`}
						<br />
						{`${authorSelected?.address.city}, ${authorSelected?.address.zipcode}`}
						<br />
						{authorSelected?.phone}
					</span>
				</div>
			</div>
			<div className="main-bottom-div">
				<div className="post-list-title">
					<span className="left-title">
                        <strong>Post List by {authorSelected?.name}</strong>
					</span>
					<span className="right-title">Total posts 12</span>
				</div>
                <div className="post-list segment ui middle aligned divided list">
                    <PostList />
                </div>
				<div className="posts-button-div">
					<button className="ui button">Load More Posts</button>
				</div>
			</div>
		</div>
	);
};

export default MainArea;
