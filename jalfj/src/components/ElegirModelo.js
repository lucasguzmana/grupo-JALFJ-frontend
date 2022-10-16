function ElegirModelo(props) {
    return (
        <div className="card_3">
            <label for="standard-select">Elige un modelo:</label>
           <div class="select">
                <select id="standard-select">
                    <option value="0">Modelo 1</option>
                    <option value="1">Modelo 2</option>
                    <option value="2">Modelo 3</option>
                    <option value="3">Modelo 4</option>
                    <option value="3">Modelo 5</option>
                </select>
            </div>
            <a href={`/ver_modelo/${props.user}`} class="cta"><button id="btn_1">Ver mas</button></a>
        </div>
    );
}

export default ElegirModelo;