import react, { useEffect, useState } from 'react'
import { LoginComponent } from '../Components/LoginCompontent'; 
import {history} from '../utils/history'
import {loginService} from '../services/login.service'
import { LayoutPage } from '../Layout/LayoutPage';
import { utenteAction } from '../Actions/utente.action';
import { useUtente } from '../Contexts/utente.context';
import { carrelloAction } from '../Actions/carrello.action';
import { carrelloService } from '../services/carrello.service';
import { UseCarrello } from '../Contexts/carrello.context';

 const LoginPage=()=>{

//   const [username, setUsername]=useState("");
//   const [password, setPassword]=useState("");
  const [form,setForm]=useState({username:"",password:""})
  const [utenteLoggato,setUtenteLoggato]=useState({})
  const [carrello,setCarrello]=useState({});

  const {utenteState,dispatch}=useUtente();
  const {carrelloState,dispatchCarrello}=UseCarrello();
  

const onChange=(e)=>
  {
    // if(e.target.name==="username")
    // setForm({...form,username:e.target.value})
    // else if (e.target.name==="password")
    // setForm({...form,password:e.target.value})
    setForm({...form,[e.target.name]:e.target.value})
  }

  const getLogin=()=>{
    const req={username:form.username,password:form.password}
    loginService.getLogin(req).then(response=>
      
      {
        setUtenteLoggato(response);
        if(response.Accesso){
        history.push('/prodotti')
        localStorage.setItem('Utente',JSON.stringify(response))
        dispatch(utenteAction.loginAction(response))
        carrelloService.viewCarrello().then((response)=>{
          dispatchCarrello(carrelloAction.setListaCarrelloAction(response))
      })
        
      }
        else
        setForm({username:"",password:""})
        }
      );

  }

  return (
      <>
      <LoginComponent form={form} onChange={onChange} getLogin={getLogin}></LoginComponent>
      </>
  )
}

const LayoutLoginPage=LayoutPage(LoginPage);
export { LayoutLoginPage as LoginPage }