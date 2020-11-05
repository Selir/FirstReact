import React from 'react'

export const InserisciPersonaForm=({id,nome,cognome,onChange,mostraPersona,edit,updatePersona})=>{
    return(
        <>

        <label>Inserisci Nome</label>
        <input type ="text"name="nome" value={nome} onChange={(e)=>onChange(e)}></input>
        <label>Inserisci Cognome</label>
        <input type ="text"name="cognome" value={cognome} onChange={(e)=>onChange(e)}></input>
        { edit ?
            <button onClick={()=>updatePersona(id)}>Modifica Persona</button>
            :
            <button onClick={()=>mostraPersona()}>Inserisci Persona</button>
        }
        
        </>
        )
        
}