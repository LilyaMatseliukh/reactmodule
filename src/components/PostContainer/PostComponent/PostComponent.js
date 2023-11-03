import React from 'react';
import css from './PostComponent.module.css';

const PostComponent = ({post, click}) => {
    const {id, title} = post;

    return (
        <div className={css.Post}>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <button onClick={() => click(id)}>Details</button>
        </div>
    );
};

export default PostComponent;