import axios from 'axios';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function CrearModelo(props) {
    const user = props.user;
    let user_id = 0;
    { user === "admin" ? user_id = 0 : user_id = 1 }
    const NuevoModelo = async () => {
        const nombre = document.getElementById("nombre").value;
        const parametro1 = document.getElementById("param_1").value;
        const parametro2 = document.getElementById("param_2").value;
        const parametro3 = document.getElementById("param_3").value;
        const parametro4 = document.getElementById("param_4").value;
        const parametro5 = document.getElementById("param_5").value;
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
        <div id='CrearModelo'>
            <label for="standard-select">Crea un modelo:</label>
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
            <button onClick={NuevoModelo}>Crear</button>
        </div>
    );
}

export default CrearModelo;