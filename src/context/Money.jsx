import React, { createContext, useContext, useState } from "react";

export const MoneyContext = createContext();
export const MoneyContextProvider = ({children}) => {
    const [money, setmoney] = useState(null);
    
    return (
        <MoneyContext.Provider value={{money, setmoney}}>
            {children}
        </MoneyContext.Provider>
    );
}

export const useMoney = () => useContext(MoneyContext);


