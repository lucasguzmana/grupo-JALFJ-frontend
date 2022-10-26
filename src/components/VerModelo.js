import BotonVolver from "./BotonVolver";
import ShowModel from "./ShowModel";

export const SERVER_URL = "http://localhost:8080";

function VerModelo () {
  const modelo = "";
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