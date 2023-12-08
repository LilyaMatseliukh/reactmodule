import React from 'react';
import {useLocation} from "react-router-dom";

import Posts from "../components/PostsContainer/Posts";

const PostsPage = () => {
    const {state: {id}} = useLocation();
    console.log(id)

    return (
        <div>
            <Posts id={id}/>
        </div>
    );
};

export default PostsPage;