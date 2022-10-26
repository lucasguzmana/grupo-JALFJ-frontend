import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import BotonVolver from "./BotonVolver";
import ElegirModelo from "./ElegirModelo";
import Parrafo from "./Parrafo";
import Boton1 from "./Boton1";
import { Navigate } from "react-router-dom";


export default class InterfaceUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      content: ""
    };
  }
 componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          redirect: null,
          content: response.data
        });
      },
      error => {
        this.setState({
          redirect: "/home",
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    return (
      <>
          <section class="flex-container" id="cuerpo_1">
              <Parrafo user={"User"}
                  p1={"Con nuestra aplicación podrás hacer simulaciones dinámicas para la cadena de producción de tu empresa de tabaquera la cual te permitirá obtener predicciones basadas en modelos estadísticos para facilitar la toma de decisiones."}
                  p2={"Como usuario podrás ver estadísticas de producción, y crear tus propios modelos de simulación, éxito en tu trabajo."}
              />
              <ElegirModelo user={"user"}/>
          </section>
  
          <hr></hr>
  
          <section class="flex-container" id="cuerpo_2">
              <Boton1 link={"/crear_modelo"} title={"Crear Modelos"} id={"btn_2"}/>
          </section>
  
          <BotonVolver link={"/"}/>
      </>
    )
  }
}
