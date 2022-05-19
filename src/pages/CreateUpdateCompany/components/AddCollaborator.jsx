import {
  Button,
  Card,
  CardContent,
  FormHelperText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCollaborator } from "../../../api/collaborator/collaboratorService";
import { getUserService } from "../../../api/user/userService";
import useForm from "../../../hooks/useForm";
import { openAlert } from "../../../redux/actions/alert";
import { validationRegisterCollaboratorSchema } from "../../../schemas/registerColaborator";
import { TextFieldPrimary } from "../../../styles/shared/textField";

function AddCollaborator({ idCompany, close }) {
  const dispatch = useDispatch();

  const HandleSubmit = async (data) => {
    const result = await getUserService(data.email);
    if (!result.data) {
      dispatch(
        openAlert(
          true,
          "Usuario no encontrado: Asegurese que el usuario este registrado en el sistema",
          "error"
        )
      );
      return;
    }

    const resultSave = await saveCollaborator({
      user: result.data.id,
      company: idCompany,
      state: 1,
    });

    if (resultSave.ok) {
      dispatch(openAlert(true, "Realizado: Colaborador agregado", "success"));
      close();
    }
  };

  const [formik] = useForm(
    { email: "" },
    validationRegisterCollaboratorSchema,
    HandleSubmit
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" marginBottom={3}>
          Agregar Colaborador
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextFieldPrimary
            fullWidth
            name="email"
            autoComplete="off"
            label="Ingrese el correo del colaborador"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button type="submit" fullWidth variant="contained">
            {" Registrar "}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddCollaborator;
