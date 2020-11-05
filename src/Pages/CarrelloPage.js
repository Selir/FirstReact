
import React, { useEffect, useState } from 'react'
import { carrelloAction } from '../Actions/carrello.action';
import { ProdottoComponent } from '../Components/ProdottoComponents';
import { UseCarrello } from '../Contexts/carrello.context';
import { LayoutPage } from '../Layout/LayoutPage';
import { carrelloService } from '../services/carrello.service';

const CarrelloPage=()=>{
    const {carrelloState,dispatchCarrello}=UseCarrello();
    const [form,setForm]=useState({id:"",titolo:"",descrizione:"",prezzo:""})


    useEffect(()=>{
        carrelloService.viewCarrello().then(response=>
            {
                dispatchCarrello(carrelloAction.setListaCarrelloAction(response))
            }); 
    }, []);

    const Elimina = (prodotto) => {
        carrelloService.deleteCarrello(prodotto).then(response => {
            dispatchCarrello(carrelloAction.setListaCarrelloAction(response))
        }
        );

    }

    const Compra = (prodotto) => {
        carrelloService.addCarrello(prodotto).then(response => {
            dispatchCarrello(carrelloAction.setListaCarrelloAction(response))
        }
        );

    }

    return (
        <>
            {carrelloState?.listaCarrello ?
                carrelloState.listaCarrello.map(prodotto => {
                    return (
                        <>
                            <ProdottoComponent prodotto={prodotto} Elimina={Elimina} Compra={Compra}></ProdottoComponent>
                        </>
                    )
                }

                ) : <h1>NON ESISTE</h1>}
        </>
    )
};

const LayoutCarrelloPage=LayoutPage(CarrelloPage);
export {LayoutCarrelloPage as CarrelloPage}





