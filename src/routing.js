import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Registrarse";
import Home from "./components/About";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
// import User from "./components/User";
import VerModelo from "./components/VerModelo";
import NuevoModelo from "./components/NuevoModelo";
import AboutUs from './components/AboutUs';
import InterfaceUser from './components/User';

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/user" element={<InterfaceUser />} />
                <Route path="/admin" element={<Admin />} />
                <Route path={"/crear_modelo"} element={<NuevoModelo/>}/>
                <Route path={"/ver_modelo/:modelo_id"} element={<VerModelo/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default Routing;

