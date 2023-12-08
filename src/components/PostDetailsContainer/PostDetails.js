import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/postsService";
import PostDetail from "./PostDetail";

import css from './PostDetails.module.css';

const PostDetails = ({id}) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        postsService.getById(id).then(({data}) => setPost(data))
    })


    return (
        <div className={css.Post}>
            <PostDetail key={post.id} post={post}/>
        </div>
    );
};

export default PostDetails;