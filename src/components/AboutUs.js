import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";

function AboutUs () {
    return (
        <>
            <Navbar></Navbar>
            <h1>Nosotros</h1>
            <p id="presentacion_grupo">Somos JALFJ, un equipo de 3 desarrolladores de la Universidad Catolica con un objetivo común, desarrollar la mejor página del curso</p>

            <section className="flex-container" id="cuerpo_about_us">
                <div className="tarjeta">
                    <div className="card">
                        <img className={"perfil"} src={"../images/Felipe.jpg"} alt={"foto Felipe"}/>
                    </div>
                    <div className="presentacion">
                        <h2 className="nombre">Felipe Karachon</h2>
                        <p>Ingeniero de Software</p>
                        <p>Minor Industrial</p>
                        <p>Generación 2019</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="card">
                        <img className={"perfil"} src={"../images/Lucas.jpg"} alt={"foto Lucas"}/>
                    </div>
                    <div className="presentacion">
                        <h2 className="nombre">Lucas Guzmán</h2>
                        <p>Ingeniero de Software</p>
                        <p>Minor Industrial</p>
                        <p>Generación 2020</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="card">
                        <img className={"perfil"} src={"../images/Jose Antonio.jpg"} alt={"foto Jose Antonio"}/>
                    </div>
                    <div className="presentacion">
                        <h2 className="nombre">José Antonio Vial</h2>
                        <p>Ingeniero en Computación</p>
                        <p>Minor Industrial</p>
                        <p>Generación 2019</p>
                    </div>
                </div>           
            </section>
            <BotonVolver link={"/"}/>
        </>
    );
}

export default AboutUs;