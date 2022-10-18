import CrearModelo from "./CrearModelo";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

function NuevoModelo() {
    const params = useParams();
    const user = params.user;
    console.log(user);
    return (
        <>
            <Navbar />
            <CrearModelo user={user} />
        </>
    );
}

export default NuevoModelo;