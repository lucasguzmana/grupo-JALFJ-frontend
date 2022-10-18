import CrearModelo from "./CrearModelo";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

function NuevoModelo() {
    const params = useParams();
    const id = params.id;
    return (
        <>
            <Navbar />
            <CrearModelo id={id} />
        </>
    );
}

export default NuevoModelo;