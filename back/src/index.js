require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { respuesta, envioMensaje } = require("./utils/handleMail.js");
const app = express();
const cors = require("cors");
const DEPLOY_FRONT = process.env.DEPLOY_FRONT;
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors(corsOptions));
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
  return res.status(202).json("listo");
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
