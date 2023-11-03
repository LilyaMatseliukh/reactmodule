import React from 'react';
import css from './PostDetails.module.css';

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;

    return (
        <div className={css.Post}>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default PostDetails;