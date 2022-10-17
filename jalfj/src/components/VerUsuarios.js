// import React from 'react';
// import axios from 'axios';
 
// export default class PersonList extends React.Component {
// state = {
// persons: []
// }
 
// componentDidMount() {
// axios.get(`https://jsonplaceholder.typicode.com/users`)
// .then(res => {
// const persons = res.data;
// this.setState({ persons });
// })
// }
 
// render() {
// return (
// <ul>
// {
// this.state.persons
// .map(person =>
// <li key={person.id}>{person.name}</li>
// )
// }
// </ul>
// )
// }
// }
import BotonVolver from './BotonVolver';
import Navbar from './Navbar';


function VerUsuarios () {
    return (
        <>
            <Navbar/>
            <h1>Ver Usuarios</h1>
            <section className="flex-container" id="cuerpo_3">
                <table id="table_usuarios">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th></th>
                    </tr>
                </table>
            </section>
            <BotonVolver link={"/admin"}/>
        </>
    );
}

export default VerUsuarios;
