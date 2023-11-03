import React from 'react';
import css from './PostComponent.module.css';

const PostComponent = ({post}) => {
    const {id, title} = post;

    return (
        <div className={css.Post}>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export default PostComponent;