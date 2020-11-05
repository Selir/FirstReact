import { utenteConstant } from "../Constants/utenti.constant"


export const utenteAction = {
    loginAction,
    logoutAction
}

function loginAction(utente) {
    return {

        type: utenteConstant.LOGIN,
        utente
    }
}

    function logoutAction(utente) {
        return {
            type: utenteConstant.LOGOUT,
            utente
        }
    }


    