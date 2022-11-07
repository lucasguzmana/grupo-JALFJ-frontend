function ShowModel(props) {
  return (
    <>
        <td>{props.model.id}</td>
        <td>{props.model.usuario_id}</td>
        <td>{props.model.nombre}</td>
        <td>{props.model.param_1}</td>
        <td>${props.model.param_2}</td>
        <td>{props.model.param_3}Kg</td>
        <td>${props.model.param_4}/Kg</td>
        <td>${props.model.param_5}/Kg</td>
    </>
  );
}

export default ShowModel;