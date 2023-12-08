import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/usersService";
import UserDetail from "./UserDetail";

import css from './UserDetails.module.css';

const UserDetails = ({userId}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        usersService.getById(userId).then(({data}) => setUser(data))
    }, [userId])

    console.log(user)

    return (
        <div className={css.User}>
            <UserDetail user={user}/>
        </div>
    );
};

export default UserDetails;