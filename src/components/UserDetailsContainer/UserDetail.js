import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './UserDetail.module.css';

const UserDetails = ({user}) => {
    const {id, name, username, email, phone} = user;

    const navigate = useNavigate();

    return (
        <div className={css.User}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <button onClick={() => navigate('posts', {state: {id}})}>Post of current user</button>
        </div>
    );
};

export default UserDetails;