import {useEffect, useState} from "react";
import { AnimaleComponent } from "../Components/AnimaleComponent";
import { HelloComponent } from "../Components/HelloComponent";
import { InserisciPersonaForm } from "../Components/InserisciPersonaForm";
import { NavBarComponent } from "../Components/NavBar";
import { useUtente } from "../Contexts/utente.context";
import { history } from "../utils/history";


function Homepage() {
  const [listaNome, setListaNome]=useState(
    [{id:"1",nome:"Mattia",cognome:"Rossi"},
     {id:"2",nome:"Francesco",cognome:"Bianchi"},
     {id:"3",nome:"Giovanni",cognome:"Gialli"},
  ]);

  const [listaAnimale, setlistaAnimale]=useState(
    [{razza:"Elefante",nome:"Giacomino"},
     {razza:"Pappagallo",nome:"Cra"},
     {razza:"Cane",nome:"Simba"},
  ]);

  const [nome, setNome]=useState("");
  const [personaModificata, setpersonaModificata]=useState(undefined);
  const [cognome, setCognome]=useState("");
  const [id,setId]=useState("");

  const [edit, setEdit]=useState(false);
  
  
  const onChange=(e)=>
  {
    if(e.target.name==="nome")
    setNome(e.target.value)
    else if (e.target.name==="cognome")
    setCognome(e.target.value)
    

  }
  const stampaPersona=()=>
  {
    console.log({nome});
    console.log({cognome});
    var id=Math.floor(Math.random()*1000);
    var nuovaPersona={id:id, nome:nome, cognome:cognome};
    
    console.log(id)
    setListaNome([...listaNome,nuovaPersona])
    pulisciInput();
  }

  const pulisciInput=()=>
  {
    setNome("");
    setCognome("");
  }

  const eliminaPersona=(id)=>
  {
    console.log(id)
    // console.log(listaNome.filter((persona)=>persona.id!==id))
    setListaNome(listaNome.filter((persona)=>persona.id!==id));

  }

  const modificaPersona=(id)=>
  {
    var persona=listaNome.filter((persona)=>persona.id===id)[0];
    console.log(persona)
    setNome(persona.nome);
    setCognome(persona.cognome);
    setEdit(true);
    setId(id);

  }

  const updatePersona = (id) => {
    console.log("entrato")
    var nuovaPersona={id:id, nome:nome, cognome:cognome}
    setListaNome(listaNome.map((persona) => persona.id===id?persona=nuovaPersona:persona))
    setpersonaModificata(listaNome.filter((persona)=>persona.id===id)[0])
}

useEffect(()=>{
  if (!JSON.parse(localStorage.getItem("Utente"))?.Accesso)
  history.push('/login')
}, []);

const {utenteState,dispatch}=useUtente();



   
     
  


  return (
    <>
      <NavBarComponent />
      {listaNome.map((elemento) => (
        <HelloComponent
          nome={elemento.nome}
          cognome={elemento.cognome}
          id={elemento.id}
          eliminaPersona={eliminaPersona}
          modificaPersona={modificaPersona} />
      ))}

      {listaAnimale.map((elemento) => (
        <AnimaleComponent
          razza={elemento.razza}
          nome={elemento.nome} />
      ))}

      <InserisciPersonaForm
        nome={nome}
        cognome={cognome}
        id={id}
        onChange={onChange}
        updatePersona={updatePersona}
        mostraPersona={stampaPersona}
        edit={edit} />

        <h1>hai modificato {personaModificata?.nome??"Nessuno"}</h1>
        <h1>BENVENUTO {utenteState?.utente?.username??"NESSUNO"}</h1>

    </>
    // <>
    // <HelloComponent nome="Mattia"/>
    // </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default Homepage;
