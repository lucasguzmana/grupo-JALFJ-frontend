import axios from 'axios';
import React, { Component } from "react";
import { useState, useEffect } from 'react';
import Boton1 from './Boton1';

export const SERVER_URL = "http://localhost:8080";
const url = `${SERVER_URL}/api/auth/elegir-modelo`;


function ElegirModelo(props) {
    const [modelos, setModelos] = useState([]);
    useEffect(() => {
        async function fetchData() {
                const result = await axios.get(url);
                setModelos(result.data);
        }
        fetchData();
    }, [props.user]);

    const handleSelectChange = (e) => {
        setOption(e.target.value);
    }

    const [ option, setOption ] = useState();

    console.log(option);

    return (
        <div className="card_3">
           <div class="select">
                <select id="standard-select" onChange={handleSelectChange} placeholder={"Selecciona un modelo..."}>
                    <option value="" disabled selected>Selecciona un modelo...</option>
                    {modelos.map((modelo) => (
                        <option value={modelo.id}>{modelo.nombre}</option>
                    ))}
                </select>
            </div>
            <Boton1 link={`/ver_modelo/${option}`} title={"Ver Más"} id={"btn_1"} type={"submit"}/>
        </div>
    );
}

export default ElegirModelo;