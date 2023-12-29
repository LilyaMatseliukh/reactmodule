import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/Header/Header";
import Component1 from "../components/component1";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            {/*<Component1/>*/}
        </div>
    );
};

export default MainLayout;