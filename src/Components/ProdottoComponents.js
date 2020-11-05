import react from 'react'
import { Button, Card } from 'react-bootstrap'


export const ProdottoComponent = ({ prodotto,Compra,showButtonCompra,Elimina }) => {



    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Prodotto: {prodotto.titolo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Descrizione:{prodotto.descrizione}</Card.Subtitle>
                <Card.Text>
                    Prezzo:{prodotto.prezzo}
                </Card.Text>
                {prodotto.quantita&&<Card.Text>
                    Quantità:{prodotto.quantita}
                </Card.Text>}
                {JSON.parse(localStorage.getItem('Utente')).ruolo==="admin"&&
                <>
                <Button variant="primary" onClick={()=>Elimina(prodotto.id)}>Elimina</Button>
                <Button variant="primary">Aggiungi</Button>
                <Button variant="primary">Modifica</Button>
                </>}
                <Button variant="primary" onClick={()=>Compra(prodotto)}>{showButtonCompra?"Aggiungi":"Compra"}</Button>
            </Card.Body>
        </Card>
</>
    )



}