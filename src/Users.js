import React from 'react';

const Users = ({asd, handler}) => {
    console.log(asd);

    return (
        <div>
            {/*<button onClick={() => handler(asd + 1)}>click</button>*/}
            <button onClick={handler}>click</button>
        </div>
    );
};

export default Users;