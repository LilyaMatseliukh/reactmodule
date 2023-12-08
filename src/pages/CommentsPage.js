import React from 'react';
import {useLoaderData, useLocation} from "react-router-dom";

import Comments from "../components/CommentsContainer/Comments";

const CommentsPage = () => {
    // const {state: {id}} = useLocation();
    // console.log(id);

    const {data: comments} = useLoaderData();

    return (
        <div>
            {/*<Comments id={id}/>*/}
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsPage;