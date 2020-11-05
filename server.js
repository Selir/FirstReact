const express=require('express')
const bodyParser= require('body-parser')    
const fs= require('fs')
const path=require('path')
const cors=require('cors')
const app=express();
app.use(cors());

const PRODUCT_DATA_FILE=path.join('./server-prodotti.json');
const USER_DATA_FILE=path.join('./server-utenti.json');
const CARRELLO_DATA_FILE=path.join ('./server-carrello.json');

app.set('port',process.env.PORT || 9999);
//LIBRERIA CHE PARSA 
app.use(bodyParser.json());
//METTE IL SERVER IN ASCOLTO AD UNA PORTA SPECIFICA
app.listen(app.get('port'),()=>{
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

//STAMPA LISTA UTENTI
app.get('/utenti',(req,res)=>{
    fs.readFile(USER_DATA_FILE,(err,data)=>{
        res.json(JSON.parse(data));
    });
});

app.get('/prodotti',(req,res)=>{
    fs.readFile(PRODUCT_DATA_FILE,(err,data)=>{
        res.json(JSON.parse(data));
    });
});

//INSERIMENTO PRODOTTI 
app.post('/prodotti',(req,res)=>{
    fs.readFile(PRODUCT_DATA_FILE,(err,data)=>{
        const listaProdotti=JSON.parse(data)
        const nuovoProdotto={
            id:req.body.id,
            titolo:req.body.titolo,
            descrizione:req.body.descrizione,
            prezzo:req.body.prezzo,
            quantita:req.body.quantita    
        };
        listaProdotti.push(nuovoProdotto);
        fs.writeFile(
            PRODUCT_DATA_FILE,
            JSON.stringify(listaProdotti),
            //STAMPA DELLA NUOVA LISTA PRODOTTI
            ()=>{
                res.json(listaProdotti);
            }
        )
    })
})

app.delete('/prodotti/:id',(req,res)=>{
    fs.readFile(PRODUCT_DATA_FILE,(err,data)=>{

        const listaProdotti=JSON.parse(data)
        const idDelete=req.params.id

        const listaProdottiNuova =listaProdotti.filter((el)=>el.id!==idDelete);

        fs.writeFile(
            PRODUCT_DATA_FILE,
            JSON.stringify(listaProdottiNuova),
            //STAMPA DELLA NUOVA LISTA PRODOTTI
            ()=>{
                res.json(listaProdottiNuova);
            }
        )
    })
})

app.post('/login',(req,res)=>{
    fs.readFile(USER_DATA_FILE, (err, data) => {
        const listaUtenti = JSON.parse(data)
        var utenteLogin={Accesso:false}
        const loginUtente = {
            username: req.body.username,
            password: req.body.password,
        };
        listaUtenti.map((utente) =>{
            if (utente.username === loginUtente.username &&
                utente.password === loginUtente.password)  
                utenteLogin={...utente,Accesso:true}
            
           
    })
    res.json(utenteLogin)
})})

app.get('/carrello',(req,res)=>{
    fs.readFile(CARRELLO_DATA_FILE,(err,data)=>{
        res.json(JSON.parse(data));
    });
});

app.post('/carrello',(req,res)=>{
    fs.readFile(CARRELLO_DATA_FILE,(err,data)=>{
        var listaCarrello=JSON.parse(data);
       
         
        var verificaPresenza=listaCarrello.filter((prodotto)=>prodotto.id===req.body.id)[0]
        if (verificaPresenza)
            verificaPresenza = { ...verificaPresenza, quantita: verificaPresenza.quantita++ }
        else {
            const nuovoProdotto = {
                id: req.body.id,
                titolo: req.body.titolo,
                descrizione: req.body.descrizione,
                prezzo: req.body.prezzo,
                quantita: "1"
            };
            listaCarrello.push(nuovoProdotto)
        }
        
        fs.writeFile(
            CARRELLO_DATA_FILE,
            JSON.stringify(listaCarrello),
            //STAMPA CARRELLO
            ()=>{
                res.json(listaCarrello);
            }
        )
    })
})

app.delete('/carrello/:id',(req,res)=>{
    fs.readFile(CARRELLO_DATA_FILE,(err,data)=>{
        var listaCarrello=JSON.parse(data);
       
         
        var verificaQuantita=listaCarrello.filter((prodotto)=>prodotto.id===req.body.id)[0]
        if (verificaPresenza)
            verificaPresenza = { ...verificaPresenza, quantita: verificaPresenza.quantita++ }
        else {
            const nuovoProdotto = {
                id: req.body.id,
                titolo: req.body.titolo,
                descrizione: req.body.descrizione,
                prezzo: req.body.prezzo,
                quantita: "1"
            };
            listaCarrello.push(nuovoProdotto)
        }
        
        fs.writeFile(
            CARRELLO_DATA_FILE,
            JSON.stringify(listaCarrello),
            //STAMPA CARRELLO
            ()=>{
                res.json(listaCarrello);
            }
        )
    })
})

app.delete('/carrello/:id',(req,res)=>{
    fs.readFile(CARRELLO_DATA_FILE,(err,data)=>{

        const listaCarrello=JSON.parse(data)
        const listaCarrelloNuova=[];
        const idDelete=req.params.id
        var flag=true;

        listaCarrello.map((el)=>
            {
                if(el.id===idDelete&&flag===true){
                    flag=false;
                }
                else{
                    listaCarrelloNuova.push(el);
                }
            })

        fs.writeFile(
            CARRELLO_DATA_FILE,
            JSON.stringify(listaCarrelloNuova),
            //STAMPA DELLA NUOVA LISTA PRODOTTI
            ()=>{
                res.json(listaCarrelloNuova);
            }
        )
    })
})

