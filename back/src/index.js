require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { Server } = require("socket.io");
const http = require("http");
const { respuesta, envioMensaje } = require("./utils/handleMail.js");
const app = express();
const cors = require("cors");
const DEPLOY_FRONT = process.env.DEPLOY_FRONT;

//io//
/* const servers = http.createServer(app);
const io = new Server(servers, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      `${DEPLOY_FRONT}`,
    ],
    credentials: true,
  },
});  */

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

/* io.on("connection", (socket) => {
  socket.on("message", async (message) => {
    if (Object.keys(message).length > 0) {
      let html = `
        <b>Your message: "${message.mensaje}" was sent correctly<b/>
        `;
      await respuesta(message.mail, "successful delivery confirmation!", html);
      await envioMensaje(message.mail, message.nombre, message.mensaje);
      return;
    }
    console.log("no hay nada");
  });
}); */

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
});
