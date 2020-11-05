import React, { useContext } from 'react';

export const CarrelloContext =React.createContext();

export const UseCarrello=()=>{
    const contextValue=useContext(CarrelloContext);
    return contextValue;

}