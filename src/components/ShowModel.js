function ShowModel(props) {
    return (
      <>
          <td>{props.model.id}</td>
          <td>{props.model.userId}</td>
          <td>{props.model.nombre}</td>
          <td>{props.model.param_1}</td>
          <td>{props.model.param_2}</td>
          <td>{props.model.param_3}</td>
          <td>{props.model.param_4}</td>
          <td>{props.model.param_5}</td>
      </>
    );
  }
  
  export default ShowModel;