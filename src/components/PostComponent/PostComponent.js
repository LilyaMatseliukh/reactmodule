import React from 'react';

const PostComponent = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export default PostComponent;