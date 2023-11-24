import React from 'react';

import css from './Header.module.css'
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <header className={css.Header}>
                <Link to={'todos'}>todos</Link>
                <Link to={'albums'}>albums</Link>
                <Link to={'comments'}>comments</Link>
            </header>
        </div>
    );
};

export default HeaderComponent;