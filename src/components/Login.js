import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BotonVolver from "./BotonVolver";
import Boton1 from "./Boton1";
import Navbar from "./Navbar";
import useCookieAuth from "../hooks/useCookieAuth";
import useTokenAuth from "../hooks/useTokenAuth";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleUserLogin } = useCookieAuth();
  const { handleTokenChange } = useTokenAuth();

  const userValidation = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${SERVER_URL}/auth/login`, {
      "email": email,
      "password": password
    });
    console.log(response.data);

    if (!response.data.error) {
      console.log(response.data.token);
      handleUserLogin();
      handleTokenChange(response.data.token, 'login');
      if (response.data.id === 0) {
        navigate("/admin");
      } else {
        navigate(`/user/${response.data.id}`);
      }
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
                <form onSubmit={userValidation}>
                    <h2>Ingresar</h2>
                    <img src={"../images/logo.png"} className="logo" alt="logo" />
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="flex-container" id="login_flex">
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                </form>
                <br/>
                <legend>¿No tienes cuenta?</legend>
                <br/>
                <div className="flex-container" id="login_flex_2">
                    <Boton1 link={"/registrarse"} title={"Registrarse"}/>
                </div>
                <br/>
                <div className="flex-container" id="login_flex_2">
                    <Boton1 link={"/guest"} title={"Ingresa como invitado"}/>
                </div>
                <BotonVolver link={"/"}/>
            </section>
        </>
  );
}

export default Login;
