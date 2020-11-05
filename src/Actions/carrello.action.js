import { carrelloConstant } from "../Constants/carrello.constant"



export const carrelloAction = {
    setListaCarrelloAction
}

function setListaCarrelloAction(listaCarrello) {
    
    return {

        type: carrelloConstant.COMPRA,
        listaCarrello
    }
}

    
    


    