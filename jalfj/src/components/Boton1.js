function Boton1(props) {
    return (
        <div>
            <a href={props.link} type={props.type}>
                <button id={props.id} onClick={props.onClick}>
                {props.title}
                </button>
            </a>
        </div>
    );
}

export default Boton1;
