import react from 'react'
import { Button, Card } from 'react-bootstrap'


export const ProdottoComponent = ({ prodotto,Compra,showButtonCompra }) => {

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Prodotto: {prodotto.titolo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Descrizione:{prodotto.descrizione}</Card.Subtitle>
                <Card.Text>
                    Prezzo:{prodotto.prezzo}
                </Card.Text>
                {showButtonCompra&&<Card.Text>
                    Prezzo:{prodotto.quantita}
                </Card.Text>}
                <Button variant="primary">Elimina</Button>
               { showButtonCompra&&<Button variant="primary" onClick={()=>Compra(prodotto)}>Compra</Button>}
            </Card.Body>
        </Card>
</>
    )



}