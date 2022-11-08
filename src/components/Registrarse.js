import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Registrarse () {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");

    const validateRegister = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${SERVER_URL}/auth/signup`, {
            "nombre": nombre,
            "email": email,
            "password": password,
            "telefono": telefono
        });
        console.log(response.data);
        if (!response.data.error) {
            navigate("/login");
        } else {
            alert("Los datos ingresados son incorrectos");
            console.log("los datos ingresados son incorrectos");
        }
    };

    return (
        <>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <section className="flex-container" id="cuerpo_4">
                <form onSubmit={validateRegister}>
                    <h2>Registrarse</h2>
                    <img src={"../images/logo.png"} className="logo" alt="logo" />
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Enter nombre" onChange={(e) => setNombre(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="cel" className="form-control" id="telefono" placeholder="Enter telefono" onChange={(e) => setTelefono(e.target.value)} required/>
                    </div>
                    <div className="flex-container" id="login_flex">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
                <BotonVolver link={"/login"}/>
            </section>
        </>
    )
}

export default Registrarse;