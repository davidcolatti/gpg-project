import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = (props) => {
	useEffect(
		() => {
			async function fetchData() {
				let res = await axios.get('https://jsonplaceholder.typicode.com/posts');

				let filteredRes = res.data.filter((post) => {
					return post.userId == props.match.params.id;
				});

				props.setPosts(filteredRes);
				props.setRenderedPosts(filteredRes.slice(0, 6));
			}
			fetchData();
		},
		[ props.authorSelected ]
	);

	const handleOnPostClick = (post) => {
		props.setSelectedPost(post);

		props.toggleTrigger();
	};

	const displayPostList = () => {
		return props.renderedPosts.map((post) => {
			if (post)
				return (
					<div className="item post-item">
						<Link
							to={`${props.match.params.id}/post/${post.id}`}
							className="item-link"
							onClick={() => handleOnPostClick(post)}
						>
							<div className="right floated content">
								<i className="align justify icon" />
							</div>
							<div className="content">{post.title}</div>
						</Link>
					</div>
				);
		});
	};

	return <Fragment>{props.renderedPosts ? displayPostList() : ''}</Fragment>;
};

export default PostList;
