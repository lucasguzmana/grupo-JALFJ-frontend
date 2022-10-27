import axios from 'axios';
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export const SERVER_URL = process.env.REACT_APP_MY_SERVER_URL;

export default class CrearModelo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    const NuevoModelo = async () => {
        const nombre = document.getElementById("nombre").value;
        const userId = currentUser.id
        const parametro1 = document.getElementById("param_1").value;
        const parametro2 = document.getElementById("param_2").value;
        const parametro3 = document.getElementById("param_3").value;
        const parametro4 = document.getElementById("param_4").value;
        const parametro5 = document.getElementById("param_5").value;
        const url = `${SERVER_URL}/crear-modelo`;
        console.log(nombre)
        console.log(parametro1)
        console.log(parametro2)
        console.log(parametro3)
        console.log(parametro4)
        console.log(parametro5)
        console.log(userId)
        console.log(url)
        const body = {
            nombre: nombre,
            userId: userId,
            param_1: parametro1,
            param_2: parametro2,
            param_3: parametro3,
            param_4: parametro4,
            param_5: parametro5
        };
        await axios.post(url, body)
            .then(response => {
                console.log(response)
                alert("Modelo creado con exito");
            })
            .catch(error => {
                console.log(error);
            });
        document.getElementById("nombre").value = "";
        document.getElementById("param_1").value = "";
        document.getElementById("param_2").value = "";
        document.getElementById("param_3").value = "";
        document.getElementById("param_4").value = "";
        document.getElementById("param_5").value = "";
    };

    return (
        <>
            <h1>Crear Modelo</h1>
            <br></br>
            <div id='CrearModelo'>
                <p>
                <strong>CurrentUser Id:</strong>{" "}
                {currentUser.id}
                </p>
                <label>Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
                <label>Parametro 1:</label>
                <input type="number" id="param_1" name="param_1" />
                <label>Parametro 2:</label>
                <input type="number" id="param_2" name="param_2" />
                <label>Parametro 3:</label>
                <input type="number" id="param_3" name="param_3" />
                <label>Parametro 4:</label>
                <input type="number" id="param_4" name="param_4" />
                <label>Parametro 5:</label>
                <input type="number" id="param_5" name="param_5" />
                <br></br>
                <br></br>
                <button onClick={NuevoModelo}>Crear</button>
            </div>
        </>
    );
    }
}