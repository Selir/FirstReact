
import react, { useEffect, useState } from 'react'
import { carrelloAction } from '../Actions/carrello.action';
import { ProdottoComponent } from '../Components/ProdottoComponents';
import { UseCarrello } from '../Contexts/carrello.context';
import { LayoutPage } from '../Layout/LayoutPage';
import { carrelloService } from '../services/carrello.service';
import { prodottiService } from '../services/prodotti.service'

const ProdottiPage=()=>{
    const [listaProdotti,setListaProdotti]=useState();
    const {carrelloState,dispatchCarrello}=UseCarrello();

    useEffect(()=>{
        prodottiService.getAllProdotti().then(response=>
            {
                console.log(response)
                setListaProdotti(response)

            });
            //LE PARENTESI QUADRE SERVONO PER DIRE ALLA FUNZIONE DI ESEGUIRSI QUANDO LO STATO VIENE AGGIORNATO
            //MA SOLO LA PRIMA VOLTA   
    }, []);

    const eliminaProdotto=(id)=>{
        prodottiService.eliminaProdotto(id).then((response)=>{
            console.log(response);
            setListaProdotti(response)
        })
    }

     const Compra = (prodotto) => {
        carrelloService.addCarrello(prodotto).then(response => {
            dispatchCarrello(carrelloAction.setListaCarrelloAction(response))
        }
        );

    }



    return (
        <>
            {listaProdotti ?
                listaProdotti.map(prodotto => {
                    return (
                        <>
                            {/* <h1>{prodotto.titolo}</h1>
                            <button onClick={()=>eliminaProdotto(prodotto.id)}> ELIMINA</button> */}
                            <ProdottoComponent prodotto={prodotto} Compra={Compra} showButtonCompra={true}></ProdottoComponent>
                        </>
                    )
                }

                ) : <h1>NON ESISTE</h1>}
        </>
    )
};

const LayoutProdottiPage=LayoutPage(ProdottiPage);
export {LayoutProdottiPage as ProdottiPage}