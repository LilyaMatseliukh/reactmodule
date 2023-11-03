import React, {useEffect, useState} from 'react';
import axios from "axios";

import PostComponent from "../PostComponent/PostComponent";
import css from './PostsComponent.module.css';
import {postService} from "../../../services/postService";
import PostDetails from "../../PostDetails/PostDetails";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    const click = async (postId) => {
        const {data} = await postService.getById(postId);
        setPostDetails(data);
    }

    return (
        <div>
            <div className={css.Post}>
                {
                    posts.map(post => <PostComponent key={post.id} post={post} click={click}/>)
                }
            </div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>
    );
};

export default PostsComponent;