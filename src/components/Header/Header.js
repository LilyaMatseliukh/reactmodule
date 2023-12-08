import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <button onClick={() => navigate('')}>Home Page</button>
        </div>
    );
};

export default Header;