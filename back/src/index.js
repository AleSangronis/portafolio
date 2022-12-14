require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { respuesta, envioMensaje } = require("./utils/handleMail.js");
const app = express();
const cors = require("cors");
const DEPLOY_FRONT = process.env.DEPLOY_FRONT;

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      `${DEPLOY_FRONT}`,
    ],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${DEPLOY_FRONT}`); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.get("/", (req, res) => {
  res.send("hola");
});
app.post("/", async (req, res) => {
  const { nombre, asunto, mail, mensaje } = req.body;
  console.log(res.body);
  let html = `
        <b>Your message: "${mensaje}" was sent correctly<b/>
        `;
  await respuesta(mail, "successful delivery confirmation!", html);
  await envioMensaje(mail, nombre, mensaje);
  return res.send("exitoso");
});

app.use((error, req, res) => {
  const name = error.name;
  const message = error.message;
  // console.error(error);
  return res.send(name + message);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
});
