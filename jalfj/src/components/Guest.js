import BotonVolver from "./BotonVolver";
import ElegirModelo from "./ElegirModelo";
import Navbar from "./Navbar";
import Parrafo from "./Parrafo";

function Guest () {
  return (
    <>
        <Navbar />
        <h1>Interfaz Guest:</h1>
        <section class="flex-container" id="cuerpo_1">
            <Parrafo user={"Guest"}
                p1={"Con nuestra aplicación podrás hacer simulaciones dinámicas para la cadena de producción de tu empresa de tabaquera la cual te permitirá obtener predicciones basadas en modelos estadísticos para facilitar la toma de decisiones."}
                p2={"Como visita solo podrás ver estadísticas de producción de otros modelos, para tener acceso a la version completa y sacar todo el potencial a la pagina registrate en el inicio."}
            />
            <ElegirModelo user={"guest"}/>
        </section>
        
        <hr></hr>

        <section class="flex-container" id="cuerpo_2">
            <img src={"../images/admin.jpg"} id={"img_guest"} alt={"guest"}/>
        </section>

        <BotonVolver link={"/"}/>
    </>
  );
}

export default Guest;