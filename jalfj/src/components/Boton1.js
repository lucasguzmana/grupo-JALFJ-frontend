function Boton1(props) {
    return (
        <div>
            <a href={props.link}>
                <button id={props.id} onClick={props.onClick}>
                {props.title}
                </button>
            </a>
        </div>
    );
}

export default Boton1;