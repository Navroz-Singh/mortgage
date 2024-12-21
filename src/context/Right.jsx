import React, {createContext, useContext, useState} from 'react';

export const RightContext = createContext();

export const RightContextProvider = ({children})=>{
    const [right, setright] = useState(false);

    return (
        <RightContext.Provider value={{right, setright}}>
            {children}
        </RightContext.Provider>
    );

}

export const useRight = () => useContext(RightContext);