import React, {useEffect, useState} from 'react';
import {UserComponent} from "../UserComponent/User";

const UsersComponent = () => {
    // const users = [
    //     {id: 1, name: 'max', age: 15, image: 'https://yt3.googleusercontent.com/QwRJs-3d_s14shxpe3hhpK9XDLzKo-gQBpca4yCZwDFVw4rozsUK0EVvTpf2fSik4HlH6O2szg=s900-c-k-c0x00ffffff-no-rj'},
    //     {id: 2, name: 'kira', age: 20, image: 'https://w7.pngwing.com/pngs/12/109/png-transparent-fixiki-tom-thomas-birthday-fiksiki-simka-birthday-child-food-holidays.png'},
    //     // {id: 3, name: 'karina', age: 5},
    //     // {id: 4, name: 'marina', age: 10}
    // ]

    // let users = [];
    // const state = useState([]);
    // const users = state[0];
    // const setUsers = state[1];
    const [users, setUsers] = useState([]);
    // const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(items => setUsers(items));
    }, [])

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
            {/*{*/}
            {/*    users && users.map(user => <UserComponent key={user.id} item={user}/>)*/}
            {/*}*/}
            {/*<UserComponent name={"max"} age={15}/>*/}
            {/*<UserComponent name={"kira"} age={20}/>*/}
        </div>
    );
};

export default UsersComponent;