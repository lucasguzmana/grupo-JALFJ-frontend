import axios from 'axios';
import BotonVolver from './BotonVolver';
import { useState } from 'react';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function CrearModelo(props) {
    const user_id = props.id;
    const [nombre, setNombre] = useState("");
    const [parametro1, setParametro1] = useState("");
    const [parametro2, setParametro2] = useState("");
    const [parametro3, setParametro3] = useState("");
    const [parametro4, setParametro4] = useState("");
    const [parametro5, setParametro5] = useState("");

    const modelValidation = async (e) => {
        e.preventDefault();
        let ok = true;
        console.log(nombre.length);
        if (nombre.length < 1) {
            alert("El nombre no puede estar vacío");
            ok = false;
        }
        if (parametro1.length < 1) {
            alert("Cantidad de empleados no puede estar vacío");
            ok = false;
        }
        if (parametro2.length < 1) {
            alert("Sueldo empleados no puede estar vacío");
            ok = false;
        }
        if (parametro3.length < 1) {
            alert("Producción mensual no puede estar vacío");
            ok = false;
        }
        if (parametro4.length < 1) {
            alert("Costo producción no puede estar vacío");
            ok = false;
        }
        if (parametro5.length < 1) {
            alert("Precio venta no puede estar vacío");
            ok = false;
        }
        if (parametro1 < 0) {
            alert("La cantidad de empleados no puede ser negativa");
            ok = false;
        }
        if (parametro2 < 0) {
            alert("El sueldo de los empleados no puede ser negativo");
            ok = false;
        }
        if (parametro3 < 0) {
            alert("La producción mensual no puede ser negativa");
            ok = false;
        }
        if (parametro4 < 0) {
            alert("El costo de producción no puede ser negativo");
            ok = false;
        }
        if (parametro5 < 0) {
            alert("El precio de venta no puede ser negativo");
            ok = false;
        }
        return ok;
    };

    const NuevoModelo = async (e) => {
        e.preventDefault();
        let ok = await modelValidation(e);
        if (ok){
            const url = `${SERVER_URL}/modelos/${user_id}`;
            const body = {
                nombre: nombre,
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
                    document.getElementById("nombre").value = "";
                    document.getElementById("param_1").value = "";
                    document.getElementById("param_2").value = "";
                    document.getElementById("param_3").value = "";
                    document.getElementById("param_4").value = "";
                    document.getElementById("param_5").value = "";
                })
                .catch(error => {
                    if (error.response.status === 409) {
                        alert("Ya existe un modelo con ese nombre");
                    } else {
                        alert("Error al crear el modelo");
                    }
                });
        } else {
            console.log("Los datos ingresados son incorrectos");
        }
    };

    return (
        <>
            <h1>Crear Modelo</h1>
            <div id='CrearModelo'>
                <label>Nombre:</label>
                <input type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} />
                <label>Cantidad empleados:</label>
                <input type="number" id="param_1" name="param_1" onChange={(e) => setParametro1(e.target.value)} />
                <label>Sueldo empleados ($):</label>
                <input type="number" id="param_2" name="param_2" onChange={(e) => setParametro2(e.target.value)} />
                <label>Producción mensual (Kg):</label>
                <input type="number" id="param_3" name="param_3" onChange={(e) => setParametro3(e.target.value)} />
                <label>Costo de producción ($/Kg):</label>
                <input type="number" id="param_4" name="param_4" onChange={(e) => setParametro4(e.target.value)} />
                <label>Precio venta ($/Kg):</label>
                <input type="number" id="param_5" name="param_5" onChange={(e) => setParametro5(e.target.value)} />
                <button onClick={NuevoModelo}>Crear</button>
            </div>
            {user_id === "0" ? <BotonVolver link={"/admin"}/> : <BotonVolver link={"/user/" + user_id}/>}
        </>
    );
}

export default CrearModelo;