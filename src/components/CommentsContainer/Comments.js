import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/commentsService";
import Comment from "./Comment";
import css from './Comments.module.css';

const Comments = ({comments}) => {
    // const [comments, setComments] = useState([]);
    //
    // useEffect(() => {
    //     commentsService.getByPostId(id).then(({data}) => setComments(data))
    // }, [id]);

    return (
        <div className={css.commentsBlock}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;