import BotonVolver from "./BotonVolver";
import ElegirModelo from "./ElegirModelo";
import Navbar from "./Navbar";
import Parrafo from "./Parrafo";
import Boton1 from "./Boton1";

function User () {
  return (
    <>
        <Navbar/>
        <h1>Interfaz User:</h1>
        <section class="flex-container" id="cuerpo_1">
            <Parrafo user={"User"}
                p1={"Con nuestra aplicación podrás hacer simulaciones dinámicas para la cadena de producción de tu empresa de tabaquera la cual te permitirá obtener predicciones basadas en modelos estadísticos para facilitar la toma de decisiones."}
                p2={"Como usuario podrás ver estadísticas de producción, y crear tus propios modelos de simulación, éxito en tu trabajo."}
            />
            <ElegirModelo user={"user"} id={1}/>
        </section>

        <hr></hr>

        <section class="flex-container" id="cuerpo_2">
            <Boton1 link={"/crear_modelo/user"} title={"Crear Modelos"} id={"btn_2"}/>
            <img src={"../images/admin.jpg"} id={"img_admin"} alt={"admin"}/>
        </section>

        <BotonVolver link={"/"}/>
    </>
  )
}

export default User;