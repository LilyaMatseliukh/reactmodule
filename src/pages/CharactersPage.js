import React from 'react';
import {useLoaderData, useLocation} from "react-router-dom";
import Characters from "../components/CharactersContainer/Characters";

const CharactersPage = () => {
    const {state: id} = useLocation();

    return (
        <div>
            <Characters id={id}/>
        </div>
    );
};

export default CharactersPage;