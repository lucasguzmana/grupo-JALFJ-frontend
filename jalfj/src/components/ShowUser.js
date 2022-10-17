import BotonEliminar from "./BotonEliminar";

function ShowUser(props) {
  return (
    <tr>
        <td>{props.user.id}</td>
        <td>{props.user.nombre}</td>
        <td>{props.user.password}</td>
        <td>{props.user.email}</td>
        <td>{props.user.telefono}</td>
        <td><BotonEliminar id={"btn_eliminar"}/></td>
    </tr>
  );
}

export default ShowUser;