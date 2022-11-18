import BotonVolver from "./BotonVolver";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useForm } from "react-hook-form";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Registrarse () {
    let navigate = useNavigate();
    const {
        register, 
        handleSubmit,
        formState: { errors }, 
        getValues
       } = useForm(); 
        const onSubmit = (data) => {
        axios.post(`${SERVER_URL}/auth/signup`, {
            "nombre": data.nombre,
            "email": data.email,
            "password": data.password,
            "telefono": data.telefono
        }).then(response => {console.log(response.data);navigate("/login");}).catch(error => {console.log(error.data)});;
       };

    return (
        <>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <section className="flex-container" id="cuerpo_4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Registrarse</h2>
                    <img src={"../images/logo.png"} className="logo" alt="logo" />
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Enter nombre" {...register("nombre", { required: true, minLength: 4 })} />
                    </div>
                        <br></br>
                        {errors.nombre && errors.nombre.type === "required" && (
                        <p>Campo requerido</p>
                        )}
                        {errors.nombre && errors.nombre.type === "minLength" && (
                        <p>Minimo 4 caracteres</p>
                        )}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" {...register("email", { required: true})} />
                    </div>
                    <br></br>
                    {errors.email && errors.email.type === "required" && (
                            <p>Campo requerido</p>
                    )}

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <input type="password" className="form-control" id="password" placeholder="Password"{...register("password", { required: true, minLength: 5 })} />
                    </div>
                    <br></br>
                    {errors.password && errors.password.type === "required" && (
                        <p>Campo requerido</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                    <p>Minimo 5 caracteres</p>
                    )}

                    <div className="form-group">
                        <label htmlFor="confirm_password">Confirma</label>
                        <input type="password" className="form-control" id="confirm_password" placeholder="Confirma contraseña" {...register("confirm_password",  {validate: (value) => {const { password } = getValues(); return password === value || "Passwords should match!";}})} />
                    </div>
                    <br></br>
                    {errors.confirm_password && errors.confirm_password.type === "required" && (
                        <p>Campo requerido</p>
                            )}
                    {errors.confirm_password && errors.confirm_password.type === "validate" && (
                        <p>Contraseñas no coinciden</p>
                    )}
                    <div className="form-group">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="cel" className="form-control" id="telefono" placeholder="Enter telefono" {...register("telefono", { required: true, minLength: 7, maxLength: 10, pattern: /[0-9]$/})} />
                    </div>
                    <br></br>
                        {errors.telefono && errors.telefono.type === "required" && (
                            <p>Completar campo</p>
                        )}
                        {errors.telefono && errors.telefono.type === "minLength" && (
                            <p>Minimo 7 caracteres</p>
                        )}
                        {errors.telefono && errors.telefono.type === "maxLength" && (
                            <p>Maximo 10 caracteres</p>
                        )}
                        {errors.telefono && errors.telefono.type === "pattern" && (
                            <p>Solo numeros</p>
                        )}
                    <div className="flex-container" id="login_flex">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
                <BotonVolver link={"/login"}/>
            </section>
        </>
    )
}

export default Registrarse;