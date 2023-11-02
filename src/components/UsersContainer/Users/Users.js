import React, {useEffect, useState} from 'react';
import axios from "axios";

import css from './Users.module.css';
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(value => setUsers(value))

        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.data)
        //     .then(value => setUsers(value))

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={css.Users}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;