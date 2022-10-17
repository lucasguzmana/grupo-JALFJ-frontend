import http from "../http-common";

<<<<<<< HEAD
const getAll = () => {
  return http.get("/modelos");
};

const get = id => {
  return http.get(`/modelos/${id}`);
};

=======
>>>>>>> ef4df5256b6604e21f8b9deac40dab4bedfcf794
const create = data => {
  return http.post("/modelos", data);
};

<<<<<<< HEAD
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
=======
const ModeloService = {
  create
>>>>>>> ef4df5256b6604e21f8b9deac40dab4bedfcf794
};

export default UsuarioService;
