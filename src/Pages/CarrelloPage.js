
import React, { useEffect, useState } from 'react'
import { ProdottoComponent } from '../Components/ProdottoComponents';
import { LayoutPage } from '../Layout/LayoutPage';
import { carrelloService } from '../services/carrello.service';

const CarrelloPage=()=>{
    const [listaCarrelo,setlistaCarrelo]=useState();
    const [form,setForm]=useState({id:"",titolo:"",descrizione:"",prezzo:""})


    useEffect(()=>{
        carrelloService.viewCarrello().then(response=>
            {
                console.log(response)
                setlistaCarrelo(response)
            }); 
    }, []);

   

    return (
        <>
            {listaCarrelo ?
                listaCarrelo.map(prodotto => {
                    return (
                        <>
                            <ProdottoComponent prodotto={prodotto}></ProdottoComponent>
                        </>
                    )
                }

                ) : <h1>NON ESISTE</h1>}
        </>
    )
};

const LayoutCarrelloPage=LayoutPage(CarrelloPage);
export {LayoutCarrelloPage as CarrelloPage}





