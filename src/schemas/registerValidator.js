import * as yup from "yup";

export const validationRegisterSchema = yup.object({
  name: yup
    .string("Ingrese su nombre")
    .required("El campo email es nesesario")
    .max(25, "Se permiten un maximo de 25 caracteres")
    .min(2, "La contrasenia debe tener al menos 2 caracteress"),
  email: yup
    .string("Ingrese su email")
    .email("Ingrese un correo valido")
    .required("El campo email es nesesario"),
  password: yup
    .string("Ingrese su contrasenia")
    .min(8, "La contrasenia debe tener al menos 8 caracteres")
    .required("El campo de contrasenia es nesesario")
    .oneOf([yup.ref("validatePassword")], "La contrasenias no coincide"),
  validatePassword: yup
    .string("Ingrese su contrasenia")
    .min(8, "La contrasenia debe tener al menos 8 caracteres")
    .required("El campo de contrasenia es nesesario")
    .oneOf([yup.ref("password")], "Las contrasenias no coinciden"),
});
