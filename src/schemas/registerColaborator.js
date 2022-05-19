import * as yup from "yup";

export const validationRegisterCollaboratorSchema = yup.object({
  email: yup.string().email("Imgrese un email valido").required(),
});
