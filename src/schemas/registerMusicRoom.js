import * as yup from "yup";

export const validationRegisterMusicRoomSchema = yup.object({
  name: yup
    .string()
    .max(50)
    .min(2, "Ingrese un nombre con logitud mayor a 2 digitos")
    .required(),
  phone: yup.string().min(6).max(15).required(),
  description: yup.string().min(20).max(220).required(),
  city: yup
    .string()
    .required()
    .notOneOf(["choose"], "No Selecciono nigun pais"),
  country: yup
    .string()
    .required()
    .notOneOf(["choose"], "No Selecciono niguna ciudad"),
  company: yup
    .string()
    .required()
    .notOneOf(["choose"], "No selecciono ninguna compania"),
  collaborator: yup
    .string()
    .required()
    .notOneOf(["choose"], "No Selecciono nigun personal a cargo"),
  address: yup.string().required().min(5).max(100),
});
