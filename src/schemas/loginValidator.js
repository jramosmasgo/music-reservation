import * as yup from "yup";

export const validationLoginSchema = yup.object({
  email: yup
    .string("Ingrese su email")
    .email("Ingrese un correo valido")
    .required("El campo email es nesesario"),
  password: yup
    .string("Ingrese su contrasenia")
    .min(8, "La contrasenia debe tener al menos 8 caracteres")
    .required("El campo de contrasenia es nesesario"),
});
