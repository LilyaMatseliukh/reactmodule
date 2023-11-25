import React from 'react';
import {useLocation} from "react-router-dom";
import PostsComponent from "../../components/posts-component/PostsComponent";

const PostsPage = () => {
    const {state: postId} = useLocation();
console.log(postId)
    return (
        <div>
            <PostsComponent postId={postId}/>
        </div>
    );
};

export default PostsPage;