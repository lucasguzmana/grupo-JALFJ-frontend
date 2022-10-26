import CrearModelo from "./CrearModelo";
import { useParams } from "react-router-dom";

function NuevoModelo() {
    const params = useParams();
    const id = params.id;
    return (
        <>
            <CrearModelo id={id} />
        </>
    );
}

export default NuevoModelo;