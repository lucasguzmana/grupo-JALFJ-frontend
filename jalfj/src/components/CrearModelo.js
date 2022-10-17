<<<<<<< HEAD
// import Navbar from "./Navbar";
// import BotonVoler from "./BotonVolver";
// import { useParams } from "react-router-dom";
=======
import Navbar from "./Navbar";
import BotonVoler from "./BotonVolver";
import { useParams } from "react-router-dom";
>>>>>>> ef4df5256b6604e21f8b9deac40dab4bedfcf794
import React, { useState } from "react";
import ModeloDataService from "../services/ModeloService";

const CrearModelo = () => {
  const initialModeloState = {
    id: null,
    nombre: "",
    param_1: 0,
    param_2: 0,
    published: false
  };
  const [modelo, setModelo] = useState(initialModeloState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setModelo({ ...modelo, [name]: value });
  };

  const saveModelo = () => {
    var data = {
      nombre: modelo.nombre,
      param_1: modelo.param_1,
      param_2: modelo.param_2
    };

    ModeloDataService.create(data)
      .then(response => {
        setModelo({
          id: response.data.id,
          nombre: response.data.nombre,
          param_1: response.data.param_1,
          param_2: response.data.param_2,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newModelo = () => {
    setModelo(initialModeloState);
    setSubmitted(false);
  };

  return (
    <div>
        <h1>Crear Modelo:</h1>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newModelo}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              required
              value={modelo.nombre}
              onChange={handleInputChange}
              name="nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="param_1">Parameter 1</label>
            <input
              type="number"
              className="form-control"
              id="param_1"
              required
              value={modelo.param_1}
              onChange={handleInputChange}
              name="param_1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="param_2">Parameter 2</label>
            <input
              type="number"
              className="form-control"
              id="param_2"
              required
              value={modelo.param_2}
              onChange={handleInputChange}
              name="param_2"
            />
          </div>

          <button onClick={saveModelo} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CrearModelo;