import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";

function Registrarse () {
    return (
        <>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <section className="flex-container" id="cuerpo_4">
                <form>
                    <h2>Registrarse</h2>
                    <img src={"../images/logo.png"} className="logo" alt="logo" />
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Enter nombre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="cel" className="form-control" id="telefono" placeholder="Enter telefono" />
                    </div>
                    <div className="flex-container" id="login_flex">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
                <BotonVolver link={"/login"}/>
            </section>
        </>
    )
}

export default Registrarse;