
import react from'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { carrelloAction } from '../Actions/carrello.action';
import { utenteAction } from '../Actions/utente.action';
import { UseCarrello } from '../Contexts/carrello.context';
import { useUtente } from '../Contexts/utente.context';
import { history } from '../utils/history';


export const NavBarComponent =()=>{

  const {utenteState,dispatch}=useUtente();
  const {carrelloState}=UseCarrello();

  const logOut=()=>{
    localStorage.removeItem("Utente")
    history.push('/login')
    dispatch(utenteAction.logoutAction())
  }

    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
          {(JSON.parse(localStorage.getItem("Utente"))?.Accesso)&&
          <>
          <Link to ="/">Home</Link>
          <Link to ="/prodotti">Prodotti</Link>
          <Link to ="/carrello">Carrelo</Link>
          <div onClick={logOut}>Logout</div>
          <div> Carrello:{carrelloState?.listaCarrello?.length}</div>
          
          </>
}
        </Navbar.Brand>
      </Navbar>
    </>
    );
}