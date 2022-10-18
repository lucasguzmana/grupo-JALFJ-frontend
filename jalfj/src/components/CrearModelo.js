// // import Navbar from "./Navbar";
// // import BotonVoler from "./BotonVolver";
// // import { useParams } from "react-router-dom";
// import React, { useState } from "react";
// import ModeloDataService from "../services/ModeloService";

// const CrearModelo = () => {
//   const initialModeloState = {
//     id: null,
//     nombre: "",
//     param_1: 0,
//     param_2: 0,
//     published: false
//   };
//   const [modelo, setModelo] = useState(initialModeloState);
//   const [submitted, setSubmitted] = useState(false);

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setModelo({ ...modelo, [name]: value });
//   };

//   const saveModelo = () => {
//     var data = {
//       nombre: modelo.nombre,
//       param_1: modelo.param_1,
//       param_2: modelo.param_2
//     };

//     ModeloDataService.create(data)
//       .then(response => {
//         setModelo({
//           id: response.data.id,
//           nombre: response.data.nombre,
//           param_1: response.data.param_1,
//           param_2: response.data.param_2,
//           published: response.data.published
//         });
//         setSubmitted(true);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const newModelo = () => {
//     setModelo(initialModeloState);
//     setSubmitted(false);
//   };

//   return (
//     <div>
//         <h1>Crear Modelo:</h1>
//       {submitted ? (
//         <div>
//           <h4>You submitted successfully!</h4>
//           <button className="btn btn-success" onClick={newModelo}>
//             Add
//           </button>
//         </div>
//       ) : (
//         <div>
//           <div className="form-group">
//             <label htmlFor="nombre">Nombre</label>
//             <input
//               type="text"
//               className="form-control"
//               id="nombre"
//               required
//               value={modelo.nombre}
//               onChange={handleInputChange}
//               name="nombre"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="param_1">Parameter 1</label>
//             <input
//               type="number"
//               className="form-control"
//               id="param_1"
//               required
//               value={modelo.param_1}
//               onChange={handleInputChange}
//               name="param_1"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="param_2">Parameter 2</label>
//             <input
//               type="number"
//               className="form-control"
//               id="param_2"
//               required
//               value={modelo.param_2}
//               onChange={handleInputChange}
//               name="param_2"
//             />
//           </div>

//           <button onClick={saveModelo} className="btn btn-success">
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CrearModelo;

import axios from 'axios';
//import { useState, useEffect } from 'react';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function CrearModelo(props) {
    
    const NuevoModelo = async () => {
        const nombre = document.getElementById("nombre").value;
        const parametro1 = document.getElementById("param_1").value;
        const parametro2 = document.getElementById("param_2").value;
        const parametro3 = document.getElementById("param_3").value;
        const parametro4 = document.getElementById("param_4").value;
        const parametro5 = document.getElementById("param_5").value;
        const url = `${SERVER_URL}/modelos/${props.user_id}`;
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
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    };
    
    return (
        <div>
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
    