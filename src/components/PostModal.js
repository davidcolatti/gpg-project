import React from 'react';

const PostModal = ({ selectedPost }) => {
	return (
		<div className="PostModal ui card">
			<div className="modal-header">
				<strong>{selectedPost.title}</strong>
				<i className="right floated close icon modal-icon" />
			</div>
			<div className="modal-description">
				<p>{selectedPost.body}</p>
			</div>
		</div>
	);
};

export default PostModal;
