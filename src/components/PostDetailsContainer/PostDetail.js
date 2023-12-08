import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './PostDetail.module.css';

const PostDetail = ({post}) => {
    const {userId, id, title, body} = post;

    const navigate = useNavigate();

    return (
            <div className={css.Post}>
                <p>UserId: {userId}</p>
                <p>Id: {id}</p>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button onClick={() => navigate('comments', {state: {id}})}>Comments</button>
            </div>
    );
};

export default PostDetail;