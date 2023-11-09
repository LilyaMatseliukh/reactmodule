import React from 'react';
import Users from "./Users";

const App = () => {

    // const handler = (ddd) => {
    //     console.log(ddd);
    // }

    const handler = () => {
        console.log('HI');
    }

    return (
        <div>
            <Users asd={1} handler={handler}/>
        </div>
    );
};

export {App};
