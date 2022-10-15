function Parrafo(props) {
  return (
    <div className="card_2">
        <h2>Bienvenido {props.user}:</h2>
        <p id="admin_p">{props.p1}</p>
        <p id="admin_p">{props.p2}</p>
    </div>
  );
}

export default Parrafo;