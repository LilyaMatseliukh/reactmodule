import React from 'react';

import css from './Comment.module.css';

const Comment = ({comment}) => {
    const {name, email, body} = comment;

    return (
        <div className={css.commentBlock}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Comment;