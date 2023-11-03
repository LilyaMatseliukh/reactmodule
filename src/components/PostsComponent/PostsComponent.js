import React, {useEffect, useState} from 'react';

import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;