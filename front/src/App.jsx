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
import { useState } from "react";
function App() {
  let array = [js, html, node, react, postgre, css, ts, mongo];

  let [espanol, setEspanol] = useState(true);

  window.addEventListener("load", function () {
    let texto = document.querySelector(".span");
    let textLoad = () => {
      setTimeout(() => {
        texto.innerHTML =
          espanol === true
            ? "Desarrolladora Full Stack"
            : "Developer Full Stack";
      }, 0);
      setTimeout(() => {
        texto.innerHTML = "Front-End";
      }, 4000);
      setTimeout(() => {
        texto.innerHTML = "Back-End";
      }, 8000);
    };
    textLoad();
    setInterval(textLoad, 12000);
  });

  let cambiarIdiomaEn = (e) => {
    e.preventDefault();
    setEspanol(!espanol);
  };
  let cambiarIdiomaEs = (e) => {
    e.preventDefault();
    if (!espanol) {
      setEspanol(!espanol);
    }
  };

  return (
    <>
      <header id="home">
        <div className="contenedor header">
          <div className="contenedor__nav">
            <nav className="menu">
              {" "}
              <a href="#home">{espanol === true ? "Home" : "Inicio"}</a>
              <a href="#sobreMi">
                {espanol === true ? "Sobre mi" : "About me"}
              </a>
              <a href="#habilidades">
                {" "}
                {espanol === true ? "Habilidades" : "Skills"}
              </a>
              <a href="#educacion">
                {espanol === true ? "Educacion" : "Education"}
              </a>
              <a href="#proyectos">
                {espanol === true ? "Proyectos" : "Projects"}
              </a>
              <a href="#contacto">
                {" "}
                {espanol === true ? "Contacto" : "Contact me"}
              </a>
            </nav>
          </div>
          <div className="contenedor_idioma">
            {" "}
            <div
              className={`but-idioma ${espanol && "espanol"}`}
              onClick={(e) => cambiarIdiomaEs(e)}
            >
              ES
            </div>
            <div
              className={`but-idioma ${!espanol && "english"}`}
              onClick={(e) => cambiarIdiomaEn(e)}
            >
              EN
            </div>
          </div>
          <div className="contenedor__contenido">
            <div className="contenido">
              <div className="contenido_nombre">
                <p>{espanol === true ? "Hola!" : "Hi!"}</p>
                <p>
                  {espanol === true ? "Mi nombre es" : "My name is"}{" "}
                  <span>Alexandra Araujo</span>
                </p>
              </div>
              <div className="contenido_rol">
                <p>{espanol === true ? "Yo soy" : "I'm a"} </p>
                <p className="span">
                  {espanol === true
                    ? "Desarrolladora Full Stack"
                    : "Developer Full Stack"}
                </p>
              </div>
            </div>
            <img className="imagen" src={img} alt="imagen" />
          </div>
        </div>
      </header>
      <section className="btns contenedor">
        <a className="btn" href="./alexandra.pdf" target="_blank">
          {espanol === true ? "Ver CV" : "View CV"}
        </a>
        <a className="btn download" href="./alexandra.pdf" download>
          {espanol === true ? "Descargar CV" : "Download CV"}
        </a>
        <a className="btn" href="#contacto">
          {espanol === true ? "Contacto" : "Contact"}
        </a>
      </section>
      <main id="sobreMi" className="contenedor">
        <div className="sobreMi">
          <h1 className="sobreMi__h1">
            {espanol === true ? "Sobre Mi" : "About Me"}
          </h1>
          <div className="sobreMi__contenido">
            <div className="text">
              <p>
                {espanol === true
                  ? "Soy Ingeniera de Telecomunicaciones y desarrolladora Full Stack,disfruto mucho la creacion y diseño de paginas web."
                  : "I am a Telecommunications Engineer and Full Stack developer, I really enjoy the creation and design of web pages."}
              </p>
              <p>
                {espanol === true
                  ? "   Desde muy temprana edad me apasiona todo lo que tiene que ver con la tecnologia y el diseño desde una simple foto. Mientras cursaba ingeniera de telecomunicaciones, me intereso mucho la programacion, desde la logica hasta el diseño de una pagina web. En el 2022, me inscribi en un bootcamp Full-time donde me recibi como Desarrolladora Full Stack, en el cual desarrolle muchas habilidades."
                  : "From a very early age I am passionate about everything that has to do with technology and design from a simple photo. While studying telecommunications engineering, I am very interested in programming, from the logic to the design of a web page. In 2022, I enrolled in a Full-time bootcamp where I was received as a Full Stack Developer, in which i improved my skills "}
              </p>
              <p>
                {espanol === true
                  ? "Mi objetivo es seguir aprendiendo dia tras dia, superarme como persona y profesional, aumentar mi eficiencia, colaborar con proyectos de alto nivel. Soy entusiasta, proactiva y comprometida con mi crecimiento y el de la empresa."
                  : "My goal is to keep learning day after day, improve as a person and professional, increase my efficiency, collaborate with high-level projects. I am enthusiastic, proactive and committed to my growth and that of the company."}
              </p>
            </div>
          </div>
        </div>
      </main>
      <section id="habilidades" className="contenedor habilidades mt-5">
        <h1>{espanol === true ? "Habilidades" : "Skills"}</h1>
        <div className="habilidades__contenedor">
          {array.map((el) => {
            return (
              <div className="imagen" key={el}>
                <img src={el} alt={el} />
              </div>
            );
          })}
        </div>
      </section>
      <section id="educacion" className="contenedor educacion ">
        <h1>{espanol === true ? "Educacion" : "Education"}</h1>
        <div className="contenedor__educacion">
          <div className="estudios">
            <div className="unefa"></div>
            <div className="estudios__contenido">
              <p>UNEFA</p>
              <p>
                {espanol === true
                  ? "Ingenieria de telecomunicaciones"
                  : "Telecommunication Engineering"}
              </p>
              <p>2013-2018</p>
            </div>
          </div>
          <div className="estudios">
            <div className="henry"></div>
            <div className="estudios__contenidohenry">
              <p>HENRY</p>
              <p>
                {espanol === true
                  ? "Desarrollador Full Stack"
                  : "Developer Full Stack"}
              </p>
              <p>2022</p>
            </div>
          </div>
        </div>
      </section>
      <section id="proyectos">
        <Proyectos idioma={espanol} />
      </section>
      <section id="contacto">
        <Contacto idioma={espanol} />
      </section>
    </>
  );
}

export default App;
