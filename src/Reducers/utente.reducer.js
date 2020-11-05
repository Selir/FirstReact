import { utenteConstant } from "../Constants/utenti.constant";


export function utenteReducer(state, action) {
    switch (action.type) {

        case utenteConstant.LOGIN:
            return {
                ...state,
                utente: action.utente
            };


        case utenteConstant.LOGOUT:
            return {
                ...state,
                utente: undefined
            }

        default: return state
    }
}