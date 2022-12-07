import githutb from "../img/github.png";
import linkedin from "../img/linkedin.png";
export default function contacto() {
  return (
    <>
      <div className="contenedor">
        <h1>Contacto</h1>
        <form class="formulario">
          <fieldset>
            <legend>Tus Datos</legend>
            <div class="campo">
              <label for="nombre">Nombre: </label>
              <input id="nombre" type="text" placeholder="Tu Nombre" required />
            </div>

            <div class="campo">
              <label for="asunto">Asunto:</label>
              <input id="asunto" type="text" placeholder="Asunto" required />
            </div>

            <div class="campo">
              <label for="email">E-mail:</label>
              <input id="email" type="email" placeholder="Tu Email" />
            </div>

            <div class="campo">
              <label for="tel">Mensaje:</label>
              <textarea rows="10" cols="20"></textarea>
            </div>
          </fieldset>
          <div className="opciones">
            <a className="btn bform">Enviar</a>
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
