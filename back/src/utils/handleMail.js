const nodemailer = require("nodemailer");
const PASSWORD = process.env.PASSWORD_S;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "araujoalexandracs97@gmail.com", // generated ethereal user
    pass: PASSWORD, // generated ethereal password
  },
});

const respuesta = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: '"successful delivery confirmation" <araujoalexandracs97@gmail.com>',
      to: email,
      subject,
      html,
    });
  } catch (e) {
    console.log("algo salio mal", e);
  }
};

const envioMensaje = async (email, name, message) => {
  try {
    await transporter.sendMail({
      from: '"User Contact Email"',
      to: "araujoalexandracs97@gmail.com",
      subject: "User Contact Email",
      html: `
                <b>De: ${email}<b/>
          <h3>El usuario "${name}" acaba de mandar este mensaje: </h3>
          <br/>
          <b>${message}<b/>
                `,
    });
  } catch (e) {
    console.log("algo salio mal", e);
  }
};

module.exports = { respuesta, envioMensaje };
