import React, {useEffect, useState} from 'react';

import css from './Episode.module.css';
import {NavLink, useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const {id, name, episode: chapter} = episode;

    // const characters = episode.characters;
    //
    // console.log(characters);

    const navigate = useNavigate();

    return (
        <div className={css.Episode} onClick={() => navigate('/characters', {state: id})}>
            id: {id}
            <br/>
            name: {name}
            <br/>
            chapter: {chapter}
            <br/>
        </div>
    );
};

export default Episode;