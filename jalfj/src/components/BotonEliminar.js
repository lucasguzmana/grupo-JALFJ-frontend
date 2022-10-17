function BotonEliminar (props) {
  return (
    <div>
        <a href={props.link}>
            <button id={props.id} onClick={props.onClick}>
            X                
            </button>
        </a>
    </div>
  )
}

export default BotonEliminar;