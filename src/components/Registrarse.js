import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Registrarse() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");

    const formValidation = async (e) => {
        e.preventDefault();
        let ok = true;
        if (password.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres");
            ok = false;
        }
        if (!(password === password2)) {
            alert("Las contraseñas no coinciden");
            ok = false;
        }
        if (telefono.length < 9) {
            alert("El teléfono debe tener al menos 9 dígitos");
            ok = false;
        }
        return ok;
    };

    const validateRegister = async (e) => {
        e.preventDefault();
        let ok = await formValidation(e)
        if (ok) {
            try {
                const response = await axios.post(`${SERVER_URL}/auth/signup`, {
                    "nombre": nombre,
                    "email": email,
                    "password": password,
                    "telefono": telefono
                });
                console.log(response.data);
                if (!response.data.error) {
                    navigate("/login");
                }
            } catch (error) {
                if (error.response.status === 409) {
                    alert("El email y/o el nombre ya está en uso");
                } else {
                    alert("Error al registrarse");
                }
            }   
        }
    };

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <section className="flex-container" id="cuerpo_4">
                <form onSubmit={validateRegister}>
                    <h2>Registrarse</h2>
                    <img src={"../images/logo.png"} className="logo" alt="logo" />
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Enter nombre" onChange={(e) => setNombre(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password confirmation</label>
                        <input type="password" className="form-control" id="password2" placeholder="Reenter password" onChange={(e) => setPassword2(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="cel" className="form-control" id="telefono" placeholder="Enter telefono" onChange={(e) => setTelefono(e.target.value)} required />
                    </div>
                    <div className="flex-container" id="login_flex">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
                <BotonVolver link={"/login"} />
            </section>
        </>
    )
}

export default Registrarse;