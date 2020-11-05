import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Router, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import {BrowserRouter} from "react-router-dom";
import { ProdottiPage } from "./Pages/ProdottiPage";
import {history} from "./utils/history";
import { LoginPage } from "./Pages/LoginPage";
import { UtenteProvider } from "./Providers/utente.provider";
import { CarrelloPage } from "./Pages/CarrelloPage";
import { CarrelloProvider } from "./Providers/carrello.provider";


function App() {
  return (
    <BrowserRouter>
    <UtenteProvider>
      <Router history={history}> 
      <CarrelloProvider>
        <Route
          exact
        path={"/"}
        component={Homepage}
        />
        
        <Route
          exact
        path={"/login"}
        component={LoginPage}
        />
        <Route
          exact
        path={"/prodotti"}
        component={ProdottiPage}
        />
        <Route
          exact
        path={"/carrello"}
        component={CarrelloPage}
        />
        </CarrelloProvider>
      </Router>
      </UtenteProvider>
    </BrowserRouter>
  )
} 

export default App;