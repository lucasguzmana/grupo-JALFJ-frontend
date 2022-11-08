import axios from "axios";
import useCookieAuth from "../hooks/useCookieAuth";
import useTokenAuth from "../hooks/useTokenAuth";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Navbar() {
    const { currentUser, handleUserLogout } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();

    const logout = async () => {
        await axios.get(`${SERVER_URL}/auth/logout`)
                .then(() => console.log("Logout successful"))
                .catch((error) => console.log(error));
        handleUserLogout();
        handleTokenChange('', 'logout');
    };



  return (
    <header className="header">
        <img class="logo" src={"../images/logo.png"} alt={"logo"}/>
        <nav>
            <ul class="nav_links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/about_us">About Us</a></li>
                <li>
                    <a href="/">Contact</a>
                    <ul class="dropdown">
                        <li><a href="/">José Antonio Vial: +569 93452908</a></li>
                        <li><a href="/">Lucas Guzmán A: +569 84583920</a></li>
                        <li><a href="/">Felipe Karachon: +569 98647324</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        {
            (currentUser) ? (
                <a href="/" class="cta"><button onClick={logout}>Cerrar Sesion</button></a>
            ) : (
                <></>
            )
        }
        <a href="/" class="dark_mode"><button class="dark_mode_btn" onClick="cambiar_fondo()">DM</button></a>
    </header>
  );
}

export default Navbar;