import { useParams } from "react-router";
import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";

function VerModelo () {
  const user = useParams().user;
  const id = useParams().id;
  console.log(user);
  console.log(id);
  return (
    <>
      <Navbar/>
      <br/>
      <br/>
      <h1>Modelo 1</h1>
      <br/>
      <br/>
      <section className="flex-container" id="cuerpo_4">
              <table className="table">
                <tr>
                  <th>Nombre</th>
                  <th>Param_1</th>
                  <th>Param_2</th>
                </tr>
                <tr>
                  <td>Modelo 1</td>
                  <td>10</td>
                  <td>20</td>
                </tr>
              </table>
      </section>
      <BotonVolver link={`/${user}/${id}` }/>
    </>
  );
};

export default VerModelo;