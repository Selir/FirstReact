import { carrelloConstant } from "../Constants/carrello.constant";
import { utenteConstant } from "../Constants/utenti.constant";


export function carrelloReducer(state, action) {
    switch (action.type) {

        case carrelloConstant.COMPRA:
            return {
                ...state,
                listaCarrello: action.listaCarrello
            };

        default: return state
    }
}