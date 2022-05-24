import {
  Button,
  Card,
  CardContent,
  Typography,
  useForkRef,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserService } from "../../../api/user/userService";
import { updateFirebase } from "../../../firebase/auth/registerFirebase";
import useForm from "../../../hooks/useForm";
import { openAlert } from "../../../redux/actions/alert";
import { validationUpdateUserSchema } from "../../../schemas/updateUserValidator";
import { TextFieldPrimary } from "../../../styles/shared/textField";

function FormUpdateDataModel({ user, close }) {
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    const resultUpdate = await updateUserService({ ...data });

    if (resultUpdate.data) {
      await updateFirebase({ displayName: resultUpdate.data.fullname });
    }

    if (resultUpdate.ok) {
      dispatch(
        openAlert(true, "Realizado: Los datos fureon actualizados", "success")
      );
      close();
    }
  };

  const [formik] = useForm(
    { fullname: "", email: "", phone: "" },
    validationUpdateUserSchema,
    handleSubmit
  );

  const setValuestForm = async () => {
    if (user.email) {
      formik.setValues({
        fullname: user.fullname,
        email: user.email,
        phone: user.phone ?? "",
      });
    }
  };

  useEffect(() => {
    setValuestForm();
  }, [user]);

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" marginBottom={3}>
            Actualizar Datos
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextFieldPrimary
              fullWidth
              name="fullname"
              autoComplete="off"
              label="Nombre de usuario"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              error={formik.touched.fullname && Boolean(formik.errors.fullname)}
              helperText={formik.touched.fullname && formik.errors.fullname}
            />
            <TextFieldPrimary
              fullWidth
              name="email"
              autoComplete="off"
              label="email"
              disabled
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextFieldPrimary
              fullWidth
              name="phone"
              autoComplete="off"
              label="ingrese su numero de telefono"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <Button type="submit" variant="contained">
              {" "}
              Guardar{" "}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default FormUpdateDataModel;
