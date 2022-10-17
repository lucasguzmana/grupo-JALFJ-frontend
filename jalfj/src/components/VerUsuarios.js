import BotonVolver from './BotonVolver';
import Navbar from './Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ShowUser from './ShowUser';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;


function VerUsuarios () {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`${SERVER_URL}/usuarios`);
            setUsuarios(result.data);
        }
        fetchData();
    }, []);

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
                        <th>Password</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Eliminar</th>
                    </tr>
                    {usuarios.map((usuario) => (
                        <ShowUser user={usuario} user_id={usuario.id}/>
                    ))}
                </table>
                <BotonVolver link={"/admin"}/>
            </section>
        </>
    );
}

export default VerUsuarios;