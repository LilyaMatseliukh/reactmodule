import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/usersService";
import User from "./User";

import css from './Users.module.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={css.usersBlock}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;