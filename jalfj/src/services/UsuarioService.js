import http from "../http-common";

const create = data => {
  return http.post("/modelos", data);
};

const ModeloService = {
  create
};

export default UsuarioService;
