// import BotonVolver from "./BotonVolver";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ModeloDataService from "../services/ModeloService";
import Navbar from "./Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import BotonVolver from "./BotonVolver";

const VerModelo = props => {
  const { id }= useParams();
  const user = useParams().user;
  console.log(user);
  // let navigate = useNavigate();

  const initialModeloState = {
    id: null,
    nombre: "Modelo N",
    param_1: 0,
    param_2: 0,
    published: false
  };

  const [currentModelo, setCurrentModelo] = useState(initialModeloState);
  const [message] = useState("");

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


// const deleteModelo = () => {
//   ModeloDataService.remove(currentModelo.id)
//       .then(response => {
//         console.log(response.data);
//         navigate("/modelos");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

  return (
    <>
      <Navbar/>
      <br/>
      <br/>
      <h1>Modelo {currentModelo.nombre}</h1>
      <section className="flex-container" id="cuerpo_3">
        {currentModelo ? (
          <>
              <table className="table">
                <tr>
                  <th>Nombre</th>
                  <th>Param_1</th>
                  <th>Param_2</th>
                  {/* <th>Param_3</th>
                  <th>Param_4</th>
                  <th>Param_5</th>
                  <th>Param_6</th>
                  <th>Param_7</th> */}
                </tr>
                <tr>
                  <td>{currentModelo.nombre}</td>
                  <td>{currentModelo.param_1}</td>
                  <td>{currentModelo.param_2}</td>
                </tr>
              </table>
            <p>{message}</p>
          </>
        ) : (
          <div>
            <br />
            <p>Please click on a Modelo...</p>
          </div>
        )}
      </section>
      <BotonVolver link={`/${user}` }/>
    </>
  );
};

export default VerModelo;