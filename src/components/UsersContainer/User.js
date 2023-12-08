import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './User.module.css';

const User = ({user}) => {
    const {id, name} = user;

    const navigate = useNavigate();

    return (
        <div className={css.User}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <button onClick={() => navigate(`${id}`)}>Details</button>
        </div>
    );
};

export default User;