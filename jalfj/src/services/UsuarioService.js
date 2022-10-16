import http from "../http-common";

const getAll = () => {
  return http.get("/modelos");
};

const get = id => {
  return http.get(`/modelos/${id}`);
};

const create = data => {
  return http.post("/modelos", data);
};

const update = (id, data) => {
  return http.put(`/modelos/${id}`, data);
};

const remove = id => {
  return http.delete(`/modelos/${id}`);
};

const removeAll = () => {
  return http.delete(`/modelos`);
};

const findByName = nombre => {
  return http.get(`/modelos?nombre=${nombre}`);
};

const ModeloService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default UsuarioService;
