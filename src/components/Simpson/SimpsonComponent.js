import React from 'react';
import stylesheet from './SimpsonComponent.css';

const SimpsonComponent = ({value}) => {
    return (
        <div>
            <h1>{value.name} {value.surname}</h1>
            <h6>Age: {value.age}</h6>
            <p>{value.info}</p>
            <img src={value.photo}/>
        </div>
    );
};

export default SimpsonComponent;
