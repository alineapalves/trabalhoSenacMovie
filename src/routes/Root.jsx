import React from "react";
import { 
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Filme from "../pages/filmes/filme.jsx";
import Cadastrar from "../pages/Cadastrar";
import NotFound from "../pages/notfound";
import Registro from "../pages/registro";
import Editar from '../pages/Editar';


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