import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/postsService";
import Post from "./Post";

import css from './Posts.module.css';

const Posts = ({id}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getByUsedId(id).then(({data}) => setPosts(data))
    }, [id])


    return (
        <div className={css.postsBlock}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;