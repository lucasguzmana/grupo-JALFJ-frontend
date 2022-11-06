// import Navbar from "./Navbar";
// import BotonVoler from "./BotonVolver";
// import React, { useState, useEffect } from "react";
// import UsuarioDataService from "../services/UsuarioService";
// import { Link } from "react-router-dom";

// const UsuariosList = () => {
//   const [usuarios, setUsuarios] = useState([]);
//   const [currentUsuario, setCurrentUsuario] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const [searchTitle, setSearchTitle] = useState("");

//   useEffect(() => {
//     retrieveUsuarios();
//   }, []);

//   const onChangeSearchTitle = e => {
//     const searchTitle = e.target.value;
//     setSearchTitle(searchTitle);
//   };

//   const retrieveUsuario = () => {
//     UsuarioDataService.getAll()
//       .then(response => {
//         setUsuarios(response.data);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const refreshList = () => {
//     retrieveUsuarios();
//     setCurrentUsuario(null);
//     setCurrentIndex(-1);
//   };

//   const setActiveUsuario = (usuario, index) => {
//     setCurrentUsuario(usuario);
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="list row">
//       <div className="col-md-8">
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by name"
//             value={searchTitle}
//             onChange={onChangeSearchTitle}
//           />
//           <div className="input-group-append">
//             <button
//               className="btn btn-outline-secondary"
//               type="button"
//               onClick={findByTitle}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <h4>Lista Usuarios </h4>

//         <ul className="list-group">
//           {usuarios &&
//             usuarios.map((usuario, index) => (
//               <li
//                 className={
//                   "list-group-item " + (index === currentIndex ? "active" : "")
//                 }
//                 onClick={() => setActiveModelo(modelo, index)}
//                 key={index}
//               >
//                 {modelo.nombre}
//               </li>
//             ))}
//         </ul>

//       </div>
//       <div className="col-md-6">
//         {currentModelo ? (
//           <div>
//             <h4>Model</h4>
//             <div>
//               <label>
//                 <strong>Name:</strong>
//               </label>{" "}
//               {currentModelo.nombre}
//             </div>
//             <div>
//               <label>
//                 <strong>Parameter 1:</strong>
//               </label>{" "}
//               {currentModelo.param_1}
//             </div>
//             <div>
//               <label>
//                 <strong>Parameter 2:</strong>
//               </label>{" "}
//               {currentModelo.param_2}
//             </div>
//             <div>
//               <label>
//                 <strong>Status:</strong>
//               </label>{" "}
//               {currentModelo.published ? "Published" : "Pending"}
//             </div>

//             <Link
//               to={"/modelos/" + currentModelo.id}
//               className="badge badge-warning"
//             >
//               Edit
//             </Link>
//           </div>
//         ) : (
//           <div>
//             <br />
//             <p>Please click on a Model...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ModelosList;
