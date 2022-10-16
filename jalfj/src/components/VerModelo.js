import BotonVolver from "./BotonVolver";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ModeloDataService from "../services/ModeloService";

const VerModelo = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialModeloState = {
    id: null,
    nombre: "Modelo N",
    param_1: 0,
    param_2: 0,
    published: false
  };

  const [currentModelo, setCurrentModelo] = useState(initialModeloState);
  const [message, setMessage] = useState("");

  const getModelo = id => {
    ModeloDataService.get(id)
      .then(response => {
        setCurrentModelo(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getModelo(id);
  }, [id]);


const deleteModelo = () => {
  ModeloDataService.remove(currentModelo.id)
      .then(response => {
        console.log(response.data);
        navigate("/modelos");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentModelo ? (
        <div>
          <h4>Modelo</h4>

            <div>
              <label htmlFor="nombre">Nombre: </label>
              <p> {currentModelo.nombre} </p>
          </div>

            <div>
              <label htmlFor="param_1">Parameter 1: </label>
              <p> {currentModelo.param_1} </p>
            </div>


            <div>
              <label htmlFor="param_2">Parameter 2: </label>
              <p> {currentModelo.param_2} </p>
            </div>

          <button className="badge badge-danger mr-2" onClick={deleteModelo}>
            Delete
          </button>

          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Modelo...</p>
        </div>
      )}
    </div>
  );
};

export default VerModelo;