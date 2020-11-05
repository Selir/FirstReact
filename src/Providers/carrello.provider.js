import react, { useReducer } from 'react';
import { CarrelloContext } from '../Contexts/carrello.context';
import { carrelloReducer } from '../Reducers/carrello.reducer';



export const CarrelloProvider=({children})=>{
    const [carrelloState,dispatchCarrello]=useReducer(carrelloReducer,{})

    return(
        <CarrelloContext.Provider value={{carrelloState,dispatchCarrello}}>
            {children}
        </CarrelloContext.Provider>
    )
}