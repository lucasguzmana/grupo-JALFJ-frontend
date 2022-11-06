import Boton1 from "./Boton1";
import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";

function LoginForm (props) {
    return (
        <>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <section className="flex-container" id="cuerpo_4">
                <form>
                    <h2>Ingresar</h2>
                    <img src={"../images/logo.png"} className="logo" alt="logo" />
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="flex-container" id="login_flex">
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                </form>
                <br/>
                <legend>¿No tienes cuenta?</legend>
                <br/>
                <div className="flex-container" id="login_flex_2">
                    <Boton1 link={props.link} title={"Registrarse"}/>
                    <Boton1 link={"/user/1"} title={"Interfaz User"}/>
                </div>
                <BotonVolver link={"/"}/>
            </section>
        </>
    )
}

export default LoginForm;