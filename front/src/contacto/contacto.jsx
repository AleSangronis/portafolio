import githutb from "../img/github.png";
import linkedin from "../img/linkedin.png";
import { useState } from "react";
import io from "socket.io-client";
import error from "./comprobacion";
import Swal from "sweetalert2";
import axios from "axios";

/* const socket = io("https://portafolio-alexandra-araujo.onrender.com"); */

export default function contacto() {
  let inicial = {
    nombre: "",
    asunto: "",
    mail: "",
    mensaje: "",
  };
  const [errors, setErrors] = useState({});

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
        await axios.post(
          "https://portafolio-alexandra-araujo.onrender.com",
          datos
        );
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
        <h1>Contact me</h1>
        <form className="formulario">
          <fieldset>
            <legend>Data</legend>
            <div className="campo">
              <label htmlFor="nombre">Name: </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={datos.nombre}
                placeholder="Your Name"
                onChange={(e) => handleSubmit(e)}
                required
                onBlur={(e) => onBlur(e)}
              />
            </div>
            {errors.nombre && <p className="errores">{errors.nombre}</p>}

            <div className="campo">
              <label htmlFor="asunto">Reason:</label>
              <input
                id="asunto"
                name="asunto"
                value={datos.asunto}
                type="text"
                placeholder="Your Reason"
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
                placeholder="Your Email"
              />
            </div>
            {errors.mail && <p className="errores">{errors.mail}</p>}

            <div className="campo">
              <label htmlFor="tel">Message:</label>
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
              Send
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
