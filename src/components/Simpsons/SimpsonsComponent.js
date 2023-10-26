import React from 'react';
import {simpsons} from "../../data/data";
import SimpsonComponent from "../Simpson/SimpsonComponent";

const SimpsonsComponent = () => {
    return (
        <div>
            {
                simpsons.map(simpson => (<SimpsonComponent key={simpson.age} value={simpson}/>))
            }
        </div>
    );
};

export default SimpsonsComponent;
