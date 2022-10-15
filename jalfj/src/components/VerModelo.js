import Navbar from "./Navbar";
import BotonVolver from "./BotonVolver";
import { useParams } from "react-router-dom";

function VerModelo () {
    let params = useParams();
    console.log(params);

    return (
        <div>
            <Navbar/>
            <h1>Ver Modelo:</h1>
            <BotonVolver link={`/${params.user}`}/>
        </div>
    )
}

export default VerModelo;