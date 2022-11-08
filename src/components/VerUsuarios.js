import BotonVolver from './BotonVolver';
import Navbar from './Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ShowUser from './ShowUser';
import ShowAdmin from './ShowAdmin';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;


function VerUsuarios () {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`${SERVER_URL}/usuarios/showall`);
            setUsuarios(result.data);
        }
        fetchData();
    }, []);

    const eliminarUsuario = async (id) => {
        await axios.post(`${SERVER_URL}/usuarios/delete_models_and_results/${id}`);
        await axios.post(`${SERVER_URL}/usuarios/delete/${id}`);
        const result = await axios.get(`${SERVER_URL}/usuarios/showall`);
        setUsuarios(result.data);
    }

    return (
        <>
            <Navbar/>
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
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Eliminar</th>
                    </tr>
                    {usuarios.map((usuario) => (
                        usuario.nombre !== "admin" ? <ShowUser user={usuario} funcion={eliminarUsuario}/> : <ShowAdmin user={usuario}/>
                    ))}
                </table>
                <BotonVolver link={"/admin"}/>
            </section>
        </>
    );
}

export default VerUsuarios;