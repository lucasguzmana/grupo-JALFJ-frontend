import axios from 'axios';
import React, { Component } from "react";
import { useState, useEffect } from 'react';
import Boton1 from './Boton1';
import BotonVolver from "./BotonVolver";
import ShowUser from "./ShowUser";

export const SERVER_URL = process.env.REACT_APP_MY_SERVER_URL;

function ElegirUsuario(props) {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        async function fetchData() {
                const result = await axios.get(`${SERVER_URL}/all-users`);
                setUsuarios(result.data);
        }
        fetchData();
    }, [props.user]);

    const eliminarUsuario = async (id) => {
        await axios.get(`${SERVER_URL}/delete-user/${id}`);
        const result = await axios.get(`${SERVER_URL}/all-users`);
        setUsuarios(result.data);
    }

    const [ option, setOption ] = useState();

    console.log(option);

    return (
        <>
            <br/>
            <br/>
            <h1>Usuarios</h1>
            <br/>
            <br/>
            <section className="flex-container" id="cuerpo_2">
                <table className="table">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Eliminar</th>
                    </tr>
                    {usuarios.map((usuario) => (
                        <ShowUser user={usuario} funcion={eliminarUsuario}/>
                    ))}
                </table>
                <BotonVolver link={"/admin"}/>
            </section>
        </>
    );
}

export default ElegirUsuario;