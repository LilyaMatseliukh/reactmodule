import React from 'react';
import {Link, NavLink} from "react-router-dom";

import css from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div>
            <header className={css.Header}>
                <NavLink to={'todos'}>todos</NavLink>
                <NavLink to={'albums'}>albums</NavLink>
                <NavLink to={'comments'}>comments</NavLink>
            </header>
        </div>
    );
};

export default HeaderComponent;