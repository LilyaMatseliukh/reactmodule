import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/commentsService";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    });

    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;