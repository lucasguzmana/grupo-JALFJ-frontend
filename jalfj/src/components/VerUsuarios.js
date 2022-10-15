import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";

function VerUsuarios () {
  return (
    <div>
      <Navbar/>
      <h1>Ver Usuarios:</h1>
      <BotonVolver link={"/admin"}/>
    </div>
  );
}

export default VerUsuarios;