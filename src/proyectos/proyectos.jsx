import "../App.css";
export default function proyectos() {
  return (
    <>
      <div className="contenedor proyectos">
        <h1>Proyectos</h1>
        <div className="contenedor__proyecto">
          <div className="card">
            <div className="card__image"></div>
            <div className="btns">
              <a
                className="btn"
                href="https://github.com/AleSangronis/CoinTracker"
                target="_blank"
              >
                Repositorio
              </a>
              <a
                className="btn download"
                href="https://pf-03-cointracker.vercel.app/"
                target="_blank"
              >
                Deploy
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card__image dogs"></div>
            <div className="btns">
              <a
                className="btn"
                href="https://github.com/AleSangronis/PI-DOGS"
                target="_blank"
              >
                Repositorio
              </a>
              <a className="btn download" href="#" target="_blank">
                Deploy
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card__image ecommerce"></div>
            <div className="btns">
              <a
                className="btn"
                href="https://github.com/AleSangronis/ecommerce-html-css"
                target="_blank"
              >
                Repositorio
              </a>
              <a
                className="btn download"
                href="https://jovial-gnome-258ea2.netlify.app/"
                target="_blank"
              >
                Deploy
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card__image techPro"></div>
            <div className="btns">
              <a
                className="btn"
                href="https://github.com/AleSangronis/Audifonos-HTML-CSS"
                target="_blank"
              >
                Repositorio
              </a>
              <a
                className="btn download"
                href="https://preeminent-stroopwafel-26848f.netlify.app/"
                target="_blank"
              >
                Deploy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
