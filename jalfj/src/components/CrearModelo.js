import Navbar from "./Navbar";
import BotonVoler from "./BotonVolver";
import { useParams } from "react-router-dom";

function CrearModelo () {
    let params = useParams();
    console.log(params);

    return (
        <div>
            <Navbar/>
            <h1>Crear Modelo:</h1>
            <BotonVoler link={`/${params.user}`}/>
        </div>
    )
}

export default CrearModelo;