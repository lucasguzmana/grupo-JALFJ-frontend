import axios from 'axios';
import { useState, useEffect } from 'react';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function ElegirModelo(props) {
    const [modelos, setModelos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`${SERVER_URL}/modelos/${props.user}/${props.id}`);
            setModelos(result.data);
        }
        fetchData();
    }, [props.user, props.id]);

    return (
        <div className="card_3">
            <label for="standard-select">Elige un modelo:</label>
           <div class="select">
                <select id="standard-select">
                    {modelos.map((modelo) => (
                        <option value={modelo.id}>{modelo.nombre}</option>
                    ))}
                </select>
            </div>
            <a href={`/ver_modelo/${props.user}/${props.id}`} class="cta"><button id="btn_1">Ver mas</button></a>
        </div>
    );
}

export default ElegirModelo;