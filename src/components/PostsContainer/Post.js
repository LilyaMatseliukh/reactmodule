import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Post.module.css';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    return (
        <div className={css.Post}>
            <p>title: {title}</p>
            <button onClick={() => navigate(`${id}`)}>Post Details</button>
        </div>
    );
};

export default Post;