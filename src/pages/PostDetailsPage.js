import React from 'react';
import {Outlet, useLoaderData, useParams} from "react-router-dom";

import PostDetails from "../components/PostDetailsContainer/PostDetails";

const PostDetailsPage = () => {
    // const {id} = useParams();
    // console.log(id);

    const {data: post} = useLoaderData();

    return (
        <div>
            {/*<PostDetails id={id}/>*/}
            <PostDetails post={post}/>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;