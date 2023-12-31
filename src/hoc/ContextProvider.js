import React, {createContext, useState} from 'react';

const Context = createContext(null);

const ContextProvider = ({children}) => {
    const state = useState({episodeName: null});

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};