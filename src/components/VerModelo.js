import BotonVolver from "./BotonVolver";
import ShowModel from "./ShowModel";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";


export const SERVER_URL = process.env.REACT_APP_MY_SERVER_URL

function VerModelo () {
  const params = useParams();
  const modelo_id = params.modelo_id;

  const [modelo, setModelo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`${SERVER_URL}/ver-modelo/${modelo_id}`);
      setModelo(result.data);
    }
    fetchData();
  }, [modelo_id]);

  return (
    <>
      <br/>
      <br/>
      <h1>Modelo: {modelo.nombre}</h1>
      <br/>
      <br/>
      <section className="flex-container" id="cuerpo_4">
              <table className="table">
                <tr>
                  <th>Id</th>
                  <th>User_id</th>
                  <th>Nombre</th>
                  <th>Param_1</th>
                  <th>Param_2</th>
                  <th>Param_3</th>
                  <th>Param_4</th>
                  <th>Param_5</th>
                  <th>Resultados</th>
                  <th>Eliminar</th>
                </tr>
                <tr>
                  <ShowModel model={modelo}/>
                </tr>
              </table>
              <BotonVolver link={"/"}/>
      </section>
    </>
    
  );
};

export default VerModelo;