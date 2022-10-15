
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './components/Index';
import AboutUs from './components/AboutUs';
import About from './components/About';
import Admin from './components/Admin';
import User from './components/User';
import Guest from './components/Guest';
import VerUsuarios from './components/VerUsuarios';
import VerModelo from './components/VerModelo';
import CrearModelo from './components/CrearModelo';

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Index/>}/>
                <Route path={"/about_us"} element={<AboutUs/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/admin"} element={<Admin/>}/>
                <Route path={"/user"} element={<User/>}/>
                <Route path={"/guest"} element={<Guest/>}/>
                <Route path={"/ver_usuarios"} element={<VerUsuarios/>}/>
                <Route path={"/ver_modelo/:user"} element={<VerModelo/>}/>
                <Route path={"/crear_modelo/:user"} element={<CrearModelo/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;