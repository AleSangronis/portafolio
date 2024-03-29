import githutb from "../img/github.png";
import linkedin from "../img/linkedin.png";
import { useState } from "react";

import error from "./comprobacion";
import Swal from "sweetalert2";
import axios from "axios";

export default function contacto({ idioma }) {
  let inicial = {
    nombre: "",
    asunto: "",
    mail: "",
    mensaje: "",
  };
  const [errors, setErrors] = useState({});
  const [cargando, setCargando] = useState(false);

  const [datos, setDatos] = useState(inicial);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const onBlur = (e) => {
    e.preventDefault();

    if (errors.hasOwnProperty(e.target.name)) {
      let errores = error(datos);
      setErrors(errores);
      return;
    }
  };
  const enviar = async (e) => {
    e.preventDefault();

    let errores = await error(datos);
    await setErrors(errores);
    if (Object.keys(errores).length === 0) {
      try {
        setCargando(!cargando);
        await axios.post(
          "https://portafolio-alexandra-araujo.onrender.com",
          datos
        );
        await setCargando(false);
        await setDatos(inicial);
        await Swal.fire({
          icon: "success",
          title: "Your mail was send!",
          confirmButtonText: "Ok!",
          timer: 1500,
        });
        return;
      } catch (error) {
        await Swal.fire({
          icon: "error",
          title: "Oops, something went wrong",
          text: `${error}`,
          confirmButtonText: "Try again",
          timer: 1500,
        });
        return;
      }
    }
  };
  return (
    <>
      <div className="contenedor">
        {cargando && (
          <div className="loading">
            {idioma === true ? "Enviando Mail.." : "Sending mail.."}
          </div>
        )}
        <h1>{idioma === true ? "Contactame" : "Contact me"}</h1>
        <form className="formulario">
          <fieldset>
            <legend>Data</legend>
            <div className="campo">
              <label htmlFor="nombre">
                {idioma === true ? "Nombre:" : "Name:"}
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={datos.nombre}
                placeholder={idioma === true ? "Tu nombre" : "Your Name"}
                onChange={(e) => handleSubmit(e)}
                required
                onBlur={(e) => onBlur(e)}
              />
            </div>
            {errors.nombre && <p className="errores">{errors.nombre}</p>}

            <div className="campo">
              <label htmlFor="asunto">
                {idioma === true ? "Motivo:" : "Reason:"}
              </label>
              <input
                id="asunto"
                name="asunto"
                value={datos.asunto}
                type="text"
                placeholder={idioma === true ? "Tu Motivo" : "Your Reason"}
                onChange={(e) => handleSubmit(e)}
                onBlur={(e) => onBlur(e)}
                required
              />
            </div>
            {errors.asunto && <p className="errores">{errors.asunto}</p>}
            <div className="campo">
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                name="mail"
                value={datos.mail}
                type="email"
                onChange={(e) => handleSubmit(e)}
                onBlur={(e) => onBlur(e)}
                placeholder={idioma === true ? "Tu Email" : "Your Email"}
              />
            </div>
            {errors.mail && <p className="errores">{errors.mail}</p>}

            <div className="campo">
              <label htmlFor="tel">
                {idioma === true ? "Mensaje:" : "Message:"}
              </label>
              <textarea
                rows="10"
                cols="20"
                name="mensaje"
                value={datos.mensaje}
                onChange={(e) => handleSubmit(e)}
                onBlur={(e) => onBlur(e)}
              ></textarea>
            </div>
            {errors.mensaje && <p className="errores">{errors.mensaje}</p>}
          </fieldset>
          <div className="opciones">
            <button
              className="btn bform"
              onClick={(e) => enviar(e)}
              type="submit"
            >
              {idioma === true ? "Enviar" : "Send"}
            </button>
            <a href="https://github.com/AleSangronis" target="_blank">
              {" "}
              <img src={githutb} alt="githutb" />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandra-carolina-araujo-sangronis-4568a8154/"
              target="_blank"
            >
              {" "}
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
