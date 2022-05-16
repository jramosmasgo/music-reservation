import * as yup from "yup";

export const validationRegisterCompanySchema = yup.object({
  name: yup
    .string()
    .max(50)
    .min(2, "Ingrese un nombre con logitud mayor a 2 digitos")
    .required(),
  phone: yup.string().min(6).max(15).required(),
  dni: yup.string().min(5).max(12).required(),
});
