import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Navigate } from "react-router-dom";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      redirect: null
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
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


  // falta mostrar hacer la opcion para mostrar usuarios y eliminarlos. Las consultas estan ya hechas, falta conectarlas aca...

  
  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
