import React from 'react';
import {useLoaderData} from "react-router-dom";

import Users from "../components/UsersContainer/Users";

const UsersPage = () => {
    const {data: users} = useLoaderData();
    console.log(users)

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default UsersPage;