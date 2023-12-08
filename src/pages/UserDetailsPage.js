import React from 'react';
import {Outlet, useLoaderData, useParams} from "react-router-dom";

import UserDetails from "../components/UserDetailsContainer/UserDetails";

const UserDetailsPage = () => {
    // const {userId} = useParams();

    const {data: user} = useLoaderData();

    return (
        <div>
            {/*<UserDetails userId={userId}/>*/}
            <UserDetails user={user}/>
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;