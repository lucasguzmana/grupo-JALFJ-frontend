import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import axios from 'axios';
import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function ResultadosModelo() {
  const params = useParams();
  const modelo_id = params.modelo_id;
  const user = params.user;
  const id = params.id;

  const [resultados, setResultados] = useState([]);
  useEffect(() => {
    async function fetchData() {
      if (user === "guest") {
        const result = await axios.get(`${SERVER_URL}/guest/modelo/${modelo_id}`);
        setResultados(result.data);
      } else {
        const result = await axios.get(`${SERVER_URL}/resultados/modelo/${modelo_id}`);
        setResultados(result.data);
      }
    }
    fetchData();
  }, [modelo_id, user]);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <h1>Resultados Modelo de Id: {modelo_id}</h1>
      <br />
      <br />
      <section className="flex-container" id="cuerpo_4">
        <table className="table">
          <tr>
            <th>Modelo_id</th>
            <th>Costo mensual mano de obra</th>
            <th>Costo mensual producción tabaco</th>
            <th>Ingreso mensual</th>
            <th>Ganancia mensual sin pago mano de obra</th>
            <th>Ganancia mensual con pago mano de obra</th>
          </tr>
          <tr>
            <td>{modelo_id}</td>
            <td>${resultados.dato_1}</td>
            <td>${resultados.dato_2}</td>
            <td>${resultados.dato_3}</td>
            <td>${resultados.dato_4}</td>
            <td>${resultados.dato_5}</td>
          </tr>
        </table>
      </section>
      {id === "undefined" ? <BotonVolver link={"/ver_modelo/" + user + "/" + id + "/" + modelo_id} /> : <BotonVolver link={"/ver_modelo/user/" + id + "/" + modelo_id} />}
    </>
  );
};

export default ResultadosModelo;