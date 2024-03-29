export default function error(datos) {
  let error = {};
  if (!datos.nombre) {
    error.nombre = "This field is required";
  }
  if (datos.nombre && !/^[a-zA-Z\s]+$/.test(datos.nombre)) {
    error.nombre = "Enter a name without numbers";
  }
  if (!datos.asunto) {
    error.asunto = "This field is required";
  }
  if (!datos.mail) {
    error.mail = "This field is required";
  }
  if (datos.mail && !/\S+@\S+\.\S+/.test(datos.mail)) {
    error.mail = "Enter a valid email";
  }
  if (!datos.mensaje) {
    error.mensaje = "This field is required";
  }
  return error;
}
