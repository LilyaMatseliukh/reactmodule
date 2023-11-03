import React, {useEffect, useState} from 'react';

import PostComponent from "../PostComponent/PostComponent";
import css from './PostsComponent.module.css';
import axios from "axios";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div className={css.Post}>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;