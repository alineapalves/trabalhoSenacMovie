import React from "react";
import { 
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Filme from "../pages/filmes/filme.jsx";
import Cadastrar from "./cadastrar.jsx";
import NotFound from "./notfound";
import Registro from "./registro";
import Editar from './editar';


const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Filme/> } />
                <Route path="/administrar/cadastrar" element={ <Cadastrar/> } />
                <Route path="/registro" element={ <Registro/> } />
                <Route path="/editar/:id" element={ <Editar/> } />
                 <Route path="*" element={ <NotFound/> } />
            </Routes>
        </Router>
    );
}

export default Root;