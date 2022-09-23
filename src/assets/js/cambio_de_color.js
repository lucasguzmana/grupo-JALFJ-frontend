let dark_mode = false;

function cambiar_fondo() {
    if (dark_mode) {
        document.body.style.backgroundColor = "#f5f5f5";
        document.body.style.color = "#24252a";
        dark_mode = false;
    } else {
        document.body.style.backgroundColor = "#24252a";
        document.body.style.color = "#f5f5f5";
        dark_mode = true;
    }
}