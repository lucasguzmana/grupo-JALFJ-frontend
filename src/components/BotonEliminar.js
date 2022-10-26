function BotonEliminar (props) {
    const id = props.user_id;
  
    const handleClick = (id) => {
      props.alApretar(id);
    }
  
    return (
      <div>
          <a href={props.link}>
              <button id={props.id} onClick={()=>{handleClick(id)}}>
              {props.title}               
              </button>
          </a>
      </div>
    )
  }
  
  export default BotonEliminar;