import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Boton1 from './Boton1';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function ElegirModelo(props) {
    const id = useParams().id;
    const [modelos, setModelos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            if (props.user === "admin" || props.user === "guest") {
                if (props.user === "guest") {
                    const result = await axios.get(`${SERVER_URL}/guest`);
                    setModelos(result.data);
                } else {
                const result = await axios.get(`${SERVER_URL}/modelos`);
                setModelos(result.data);
                }
            } else {
                const result = await axios.get(`${SERVER_URL}/modelos/${id}`);
                setModelos(result.data);
            }
        }
        fetchData();
    }, [props.user, id]);

    const handleSelectChange = (e) => {
        setOption(e.target.value);
    }

    const [ option, setOption ] = useState();

    return (
        <div className="card_3">
            <label htmlFor="standard-select">Elige un modelo:</label>
           <div className="select">
                <select id="standard-select" onChange={handleSelectChange} placeholder={"Selecciona un modelo..."}>
                    <option value="" disabled selected>Selecciona un modelo...</option>
                    {modelos.map((modelo) => (
                        <option value={modelo.id}>{modelo.nombre}</option>
                    ))}
                </select>
            </div>
            { option === undefined ? <Boton1 disabled={true} link={`/ver_modelo/${props.user}/${id}/${option}`} title={"Ver Más"} id={"btn_1"} type={"submit"}/> : <Boton1 disabled={false} link={`/ver_modelo/${props.user}/${id}/${option}`} title={"Ver Más"} id={"btn_1"} type={"submit"}/> }
        </div>
    );
}

export default ElegirModelo;