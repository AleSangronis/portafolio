import "./App.css";
import img from "./img/img.png";
import js from "./habilidades/js.png";
import html from "./habilidades/html.png";
import node from "./habilidades/node.png";
import react from "./habilidades/react.png";
import postgre from "./habilidades/postgre.png";
import css from "./habilidades/css.png";
import ts from "./habilidades/typescript.png";
import mongo from "./habilidades/mongo.png";
import Proyectos from "./proyectos/proyectos.jsx";
import Contacto from "./contacto/contacto";
function App() {
  let array = [js, html, node, react, postgre, css, ts, mongo];
  return (
    <>
      <header id="home">
        <div className="contenedor header">
          <div className="contenedor__nav">
            <nav className="menu">
              {" "}
              <a href="#home">Home</a>
              <a href="#sobreMi">Sobre Mi</a>
              <a href="#habilidades">Habilidades</a>
              <a href="#educacion">Educacion</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>
          <div className="contenedor__contenido">
            <div className="contenido">
              <div className="contenido_nombre">
                <p>Hi!</p>
                <p>
                  My name is <span>Alexandra Araujo</span>
                </p>
              </div>
              <div className="contenido_rol">
                <p>
                  I'm a <span>Developer Full Stack</span>
                </p>
              </div>
            </div>
            <img className="imagen" src={img} alt="imagen" />
          </div>
        </div>
      </header>
      <section className="btns contenedor">
        <a className="btn" href="./alexandra.pdf" target="_blank">
          Ver CV
        </a>
        <a className="btn download" href="./alexandra.pdf" download>
          Descargar CV
        </a>
        <a className="btn" href="#contacto">
          Contacto
        </a>
      </section>
      <main id="sobreMi" className="contenedor">
        <div className="sobreMi">
          <h1 className="sobreMi__h1">Sobre Mi</h1>
          <div className="sobreMi__contenido">
            <div className="text">
              <p>
                Soy Ingeniera de Telecomunicaciones y desarrolladora Full Stack,
                disfruto mucho la creacion y diseño de paginas web.
              </p>
              <p>
                Desde muy temprana edad me apasiona todo lo que tiene que ver
                con la tecnologia y el diseño desde una simple foto. Mientras
                cursaba ingeniera de telecomunicaciones, me intereso mucho la
                programacion, desde la logica hasta el diseño de una pagina web.
                En el 2022, me inscribi en un bootcamp Full-time donde me recibi
                como Desarrolladora Full Stack, en el cual desarrolle muchas
                habilidades.
              </p>
              <p>
                Mi objetivo es seguir aprendiendo dia tras dias, superarme como
                persona y profesional, aumentar mi eficiencia, colaborar con
                proyectos de alto nivel. Soy entusiasta, proactiva y
                comprometida con mi crecimiento y el de la empresa.
              </p>
            </div>
          </div>
        </div>
      </main>
      <section id="habilidades" className="contenedor habilidades mt-5">
        <h1>Habilidades</h1>
        <div className="habilidades__contenedor">
          {array.map((el) => {
            return (
              <div className="imagen">
                <img src={el} alt={el} />
              </div>
            );
          })}
        </div>
      </section>
      <section id="educacion" className="contenedor educacion ">
        <h1>Educacion</h1>
        <div className="contenedor__educacion">
          <div className="estudios">
            <div className="unefa"></div>
            <div className="estudios__contenido">
              <p>UNEFA</p>
              <p>Ingenieria de telecomunicaciones</p>
              <p>2013-2018</p>
            </div>
          </div>
          <div className="estudios">
            <div className="henry"></div>
            <div className="estudios__contenidohenry">
              <p>HENRY</p>
              <p>Developer Full Stack</p>
              <p>2022</p>
            </div>
          </div>
        </div>
      </section>
      <section id="proyectos">
        <Proyectos />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
    </>
  );
}

export default App;
