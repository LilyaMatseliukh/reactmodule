import React from 'react';
import {Outlet, useParams} from "react-router-dom";

import UserDetails from "../components/UserDetailsContainer/UserDetails";

const UserDetailsPage = () => {
    const {userId} = useParams();

    return (
        <div>
            <UserDetails userId={userId}/>
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;