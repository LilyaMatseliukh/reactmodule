import React from 'react';
import {useLocation} from "react-router-dom";

import {Characters} from "../components";

const CharactersPage = () => {
    const {state: id} = useLocation();

    return (
        <div>
            <Characters id={id}/>
        </div>
    );
};

export {CharactersPage};