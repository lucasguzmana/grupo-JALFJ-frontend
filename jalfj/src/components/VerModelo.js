import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import axios from 'axios';
import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";
import ShowModel from "./ShowModel";
import BotonEliminar from "./BotonEliminar";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function VerModelo () {
  const params = useParams();
  const user = params.user;
  const id = params.id;
  const modelo_id = params.modelo_id;

  const [modelo, setModelo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`${SERVER_URL}/modelos/user/${modelo_id}`);
      setModelo(result.data);
    }
    fetchData();
  }, [modelo_id]);

  function DeleteModel (id) {
    console.log("DeleteModel:" + id);
  }


  return (
    <>
      <Navbar/>
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
                  <ShowModel model={modelo} model_id={modelo.id} user={user}/>
                  <td><BotonEliminar id={"btn_res"} link={`/resultados_modelo/${user}/${id}/${modelo_id}`} title={"Ver"}/></td>
                  <td><BotonEliminar id={"btn_eliminar"} onClick={DeleteModel(modelo_id)} title={"X"}/></td>
                </tr>
              </table>
      </section>
      {id === "undefined" ? <BotonVolver link={"/" + user}/> : <BotonVolver link={"/user/" + id}/>} 
    </>
  );
};

export default VerModelo;