import React from 'react';
import {useLocation} from "react-router-dom";
import Comments from "../components/CommentsContainer/Comments";

const CommentsPage = () => {
    const {state: {id}} = useLocation();
    console.log(id);

    return (
        <div>
            <Comments id={id}/>
        </div>
    );
};

export default CommentsPage;