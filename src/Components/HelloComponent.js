import React from'react'
import './HelloComponent.css'
import style from './HelloComponent.module.css'

export const HelloComponent =({nome,cognome,id,eliminaPersona,modificaPersona})=>{
    return(
        <div className={style.containerHelloComponent}>
        <h1> hello World {id} {nome} {cognome}</h1>
        <button onClick={()=>eliminaPersona(id)} style={{backgroundColor:"red",height:"50px",borderRadius:"10px",width:"100px"}}>DELETE</button>
        <button onClick={()=>modificaPersona(id)} style={{backgroundColor:"green",height:"50px",borderRadius:"10px",width:"100px"}}>EDIT</button>
        </div>
    );
}