import React from 'react';

import css from './Header.module.css';
import {useAppContext} from "../../hooks";

const Header = () => {
    const {episodeName} = useAppContext();

    return (
        <div className={css.Header}>
            <h1>Rick & Morty</h1>
            {episodeName && <h1>{episodeName}</h1>}
        </div>
    );
};

export {Header};