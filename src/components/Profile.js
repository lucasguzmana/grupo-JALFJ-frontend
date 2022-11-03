import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
<>
<br/>
<br/>
<br/>
<br/>

<section className="flex-container" id="cuerpo_4">
        <table className="table">
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Roles</th>
          </tr>
          <tr>
            <td>{currentUser.id}</td>
            <td>{currentUser.username}</td>
            <td>{currentUser.email}</td>
            <td>{currentUser.telefono}</td>
            <td>
              <ul>
              {currentUser.roles &&
              currentUser.roles.map((role, index) => <li className="li_esp" key={index}>{role}</li>)}
              </ul>
            </td>
          </tr>
        </table>
</section>
</>
    );
  }
}





