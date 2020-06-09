import React from 'react';
import PostList from './PostList';

const MainArea = (props) => {
	if (props.authorList) {

		let authorChosen = props.authorList.find(author => {
			return author.id == props.match.params.id
		})

		props.setAuthorSelected(authorChosen)
	}

	return (
		<div className="MainArea">
			<div className="main-top-div">
				<div className="main-top-content">
					<span className="top-content-left">
						<strong>{props.authorSelected?.name}</strong>
						<br />
						<i>{props.authorSelected?.username}</i>
					</span>
					<span className="top-content-right">{props.authorSelected?.email}</span>
				</div>
				<div className="main-top-contact">
					<span>
						<strong>Contact</strong>
						<br />
						{`${props.authorSelected?.address.suite} ${props.authorSelected?.address.street}`}
						<br />
						{`${props.authorSelected?.address.city}, ${props.authorSelected?.address.zipcode}`}
						<br />
						{props.authorSelected?.phone}
					</span>
				</div>
			</div>
			<div className="main-bottom-div">
				<div className="post-list-title">
					<span className="left-title">
                        <strong>Post List by {props.authorSelected?.name}</strong>
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
