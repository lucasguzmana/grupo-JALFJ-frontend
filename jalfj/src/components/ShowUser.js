import BotonEliminar from "./BotonEliminar";

function DeleteUser (id) {
  console.log("DeleteUser: " + id);
}

function ShowUser(props) {
  return (
    <tr>
        <td>{props.user.id}</td>
        <td>{props.user.nombre}</td>
        <td>{props.user.password}</td>
        <td>{props.user.email}</td>
        <td>{props.user.telefono}</td>
        <td><BotonEliminar id={"btn_eliminar"} onClick={DeleteUser(props.user_id)}/></td>
    </tr>
  );
}

export default ShowUser;