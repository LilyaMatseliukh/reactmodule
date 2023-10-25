import React from 'react';
import './FirstComponent.css';

const FirstComponent = ({txt, image})  => {
    return (
        <div>
            <h2>
                {txt}
            </h2>
            <img src={image}/>
            <hr/>
        </div>
    );
};

export default FirstComponent;