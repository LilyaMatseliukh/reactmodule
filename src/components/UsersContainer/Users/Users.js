import React, {useEffect, useState} from 'react';
import axios from "axios";

import css from './Users.module.css';
import User from "../User/User";
import {axiosService} from "../../../services/axiosService";
import {userService} from "../../../services/userService";
import UserDetails from "../../UserDetails/UserDetails";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(value => setUsers(value))

        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.data)
        //     .then(value => setUsers(value))

        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(({data}) => setUsers(data))

        // axiosService.get('/users')
        //     .then(({data}) => setUsers(data))

        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    // const click = (userId) => {
    //     console.log(userId)
    // }

    const click = async (userId) => {
        const {data} = await userService.getById(userId);
        // console.log(data);
        setUserDetails(data);
    }

    return (
        <div>
            <div className={css.Users}>
                {
                    users.map(user => <User key={user.id} user={user} click={click}/>)
                }
            </div>

            {
                // userDetails ? <UserDetails userDetails={userDetails}/> : <h1>Not selected</h1>
                userDetails && <UserDetails userDetails={userDetails}/>
            }
        </div>
    );
};

export default Users;