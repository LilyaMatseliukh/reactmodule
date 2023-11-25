import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/postsService";
import PostComponent from "./PostComponent";

const PostsComponent = ({postId}) => {
    const [post, setPosts] = useState({});

    useEffect(() => {
        postsService.getByPostId(postId).then(({data}) => setPosts(data))
    }, [postId])

    return (
        <div>
            {/*{*/}
            {/*    posts.map(post => <PostComponent key={post.id} post={post}/>)*/}
            {/*}*/}

            <PostComponent key={post.id} post={post}/>
        </div>
    );
};

export default PostsComponent;