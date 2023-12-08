import React from 'react';
import {useLoaderData, useLocation} from "react-router-dom";

import Posts from "../components/PostsContainer/Posts";

const PostsPage = () => {
    // const {state: {id}} = useLocation();
    // console.log(id)

    const {data: posts} = useLoaderData();

    return (
        <div>
            {/*<Posts id={id}/>*/}
            <Posts posts={posts}/>
        </div>
    );
};

export default PostsPage;