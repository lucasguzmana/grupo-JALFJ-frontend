function BotonVolver(props) {
    return (
      <div className="botonVolver">
          <a href={props.link}>
              <button id="volver">Volver</button>
          </a>
      </div>
    );
  }
  
  export default BotonVolver;