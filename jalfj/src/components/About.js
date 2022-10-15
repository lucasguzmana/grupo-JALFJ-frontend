import Navbar from "./Navbar";

function About () {
    return (
        <>
            <Navbar></Navbar>
            <h1>Acerca de Smoking Monkeys</h1>
            <p class="acerca_de">Con nuestra aplicación podrás hacer simulaciones dinámicas para la cadena de producción de tu empresa tabaquera, la cual te permitirá obtener predicciones basadas en modelos estadísticos para facilitar la toma de decisiones. Esto lo podrás hacer creando tus modelos, viendo los de los demás o utilizando modelos existentes creados por nosotros. </p>
            <p class="acerca_de"></p>
            <p class="acerca_de">La version actual es v 1.0</p>
            <hr></hr>
            <img  id={"about_img"} src={"../images/about.jpg"} alt={"img_about"}/>
            <div class="interfaz_volver">
                <a href="/"><button id="volver">Volver</button></a>
            </div>
        </>
    );
}

export default About;