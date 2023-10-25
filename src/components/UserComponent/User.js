import React from 'react';

const UserComponent = ({item}) => {
// console.log(props);
let {name, age, image} = item;
// let {user:{name, age}} = props;
    return (
        <div>
            <div>Name: {name}</div>
            {/*<div>Age: {age}</div>*/}
            {/*<img src={image} alt={name}/>*/}
        </div>
    );
};

export {UserComponent};