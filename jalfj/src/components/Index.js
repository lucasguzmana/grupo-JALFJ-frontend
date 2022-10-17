import Boton1 from "./Boton1";
import Navbar from "./Navbar";
import Tarjeta from "./Tarjeta";

function Index() {
    return (
        <>
            <Navbar/>
            <section class="flex-container" id="cuerpo">
                <Tarjeta boton={<Boton1 title={"Admin"} id={"btn_1"} link={"Admin"}/>}/>
<<<<<<< HEAD
                <Tarjeta boton={<Boton1 title={"User"} id={"btn_1"} link={"User"}/>}/>
=======
                <Tarjeta boton={<Boton1 title={"User"} id={"btn_1"} link={"login"}/>}/>
>>>>>>> ef4df5256b6604e21f8b9deac40dab4bedfcf794
                <Tarjeta boton={<Boton1 title={"Guest"} id={"btn_1"} link={"Guest"}/>}/>
            </section>
        </>
    )
}

export default Index;