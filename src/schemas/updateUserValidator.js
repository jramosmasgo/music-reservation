import * as yup from "yup";

export const validationUpdateUserSchema = yup.object({
  fullname: yup
    .string("Ingrese su nombre")
    .required("El campo email es nesesario")
    .max(40, "Se permiten un maximo de 25 caracteres")
    .min(2, "La contrasenia debe tener al menos 2 caracteress"),
  email: yup.string("Ingrese su email").email("Ingrese un correo valido"),
  phone: yup.string("Ingrese su telefono").max(13).min(8),
});
