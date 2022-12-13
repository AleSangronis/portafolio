export default function error(datos) {
  let error = {};
  if (!datos.nombre) {
    error.nombre = "Este campo es requerido";
  }
  if (!datos.asunto) {
    error.asunto = "Este campo es requerido";
  }
  if (!datos.mail) {
    error.mail = "Este campo es requerido";
  }
  if (datos.mail && !/\S+@\S+\.\S+/.test(datos.mail)) {
    error.mail = "Ingrese un mail valido";
  }
  if (!datos.mensaje) {
    error.mensaje = "Este campo es requerido";
  }
  return error;
}
