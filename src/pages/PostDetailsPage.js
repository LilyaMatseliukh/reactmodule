import React from 'react';
import PostDetails from "../components/PostDetailsContainer/PostDetails";
import {Outlet, useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const {id} = useParams();
    console.log(id)

    return (
        <div>
            <PostDetails id={id}/>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;