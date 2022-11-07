import Boton1 from "./Boton1";
import Navbar from "./Navbar";
import Tarjeta from "./Tarjeta";

function Index() {
    return (
        <>
            <Navbar/>
            <section class="flex-container" id="cuerpo">
                <Tarjeta boton={<Boton1 title={"Inicia Sesión"} id={"btn_1"} link={"/login"}/>}/>
            </section>
        </>
    )
}

export default Index;