import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";
import Parrafo from "./Parrafo";
import Tarjeta from "./Tarjeta";
import Boton1 from "./Boton1";
import ElegirModelo from "./ElegirModelo";

function Admin() {
    return (
      <>
        <Navbar/>
        <h1>Interfaz Admin:</h1>
        <section class="flex-container" id="cuerpo_1">
            <Parrafo user={"Admin"}
                p1={"Con nuestra aplicación podrás hacer simulaciones dinámicas para la cadena de producción de tu empresa de tabaquera la cual te permitirá obtener predicciones basadas en modelos estadísticos para facilitar la toma de decisiones."}
                p2={"Como administrador podrás crear y eliminar usuarios, ver estadísticas de producción, y crear tus propios modelos de simulación, éxito en tu trabajo."}
            />
            <ElegirModelo user={"admin"}/>
            <Tarjeta boton={<Boton1 link={"/ver_usuarios"} title={"Ver Usuarios Existentes"}/>}/>
        </section>

        <hr></hr>

        <section class="flex-container" id="cuerpo_2">
            <Boton1 link={"/crear_modelo/0"} title={"Crear Modelos"} id={"btn_2"}/>
            <img src={"../images/admin.jpg"} id={"img_admin"} alt={"admin"}/>
        </section>

        <BotonVolver link={"/"}/>
      </>
    );
  }
  
  export default Admin;