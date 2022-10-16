import Boton1 from "./Boton1";
import Navbar from "./Navbar";
import Tarjeta from "./Tarjeta";

function Index() {
    return (
        <>
            <Navbar/>
            <section class="flex-container" id="cuerpo">
                <Tarjeta boton={<Boton1 title={"Admin"} id={"btn_1"} link={"Admin"}/>}/>
                <Tarjeta boton={<Boton1 title={"User"} id={"btn_1"} link={"login"}/>}/>
                <Tarjeta boton={<Boton1 title={"Guest"} id={"btn_1"} link={"Guest"}/>}/>
            </section>
        </>
    )
}

export default Index;