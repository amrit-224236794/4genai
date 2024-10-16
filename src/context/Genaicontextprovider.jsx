import React, { useState } from 'react';
import Genaicontext from './genaicontext';

function Genaicontextprovider({ children }) {
    const [model, setModel] = useState("");

    return (
        <Genaicontext.Provider value={{ model, setModel }}>
            {children}
        </Genaicontext.Provider>
    );
}

export default Genaicontextprovider;
