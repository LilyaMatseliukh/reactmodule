import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

import css from './HeaderComponent.module.css'

const HeaderComponent = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className={css.Header}>
                <NavLink to={'todos'}>todos</NavLink>
                <NavLink to={'albums'}>albums</NavLink>
                <NavLink to={'comments'}>comments</NavLink>
            </header>
            <button onClick={() => navigate(-1)}>prev page</button>
            <button onClick={() => navigate(1)}>next page</button>
        </div>
    );
};

export default HeaderComponent;