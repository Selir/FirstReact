import react, { useReducer } from 'react';
import { UtenteContext } from '../Contexts/utente.context';
import { utenteReducer } from '../Reducers/utente.reducer';


export const UtenteProvider=({children})=>{
    const [utenteState,dispatch]=useReducer(utenteReducer,{})

    return(
        <UtenteContext.Provider value={{utenteState,dispatch}}>
            {children}
        </UtenteContext.Provider>
    )
}