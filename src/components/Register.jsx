import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { TextFieldPrimary } from "../styles/shared/textField";
import { Box } from "@mui/system";
import { validationRegisterSchema } from "../schemas/registerValidator";
import useForm from "../hooks/useForm";
import registerFirebase from "../firebase/auth/registerFirebase";
import loginGoogle from "../firebase/auth/loginGoogle";

const style = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: 600,
  marginTop: 60,
  padding: 15,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Register({ closeregister }) {
  const handleSubmit = async (data) => {
    await registerFirebase(data);
    closeregister();
  };

  const [formik] = useForm(
    {
      name: "",
      email: "",
      password: "",
      validatePassword: "",
    },
    validationRegisterSchema,
    handleSubmit
  );

  return (
    <Card style={style} elevation={2}>
      <CardContent>
        <Typography marginBottom={3} variant="h5">
          Inicio se Sesion
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextFieldPrimary
            fullWidth
            name="name"
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            label="Ingrese su nombre"
          />
          <TextFieldPrimary
            fullWidth
            name="email"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            label="Ingrese su correo"
          />
          <TextFieldPrimary
            fullWidth
            label="password"
            type="password"
            name="password"
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextFieldPrimary
            fullWidth
            label="Repita contrasenia"
            type="password"
            name="validatePassword"
            autoComplete="off"
            value={formik.values.validatePassword}
            onChange={formik.handleChange}
            error={
              formik.touched.validatePassword &&
              Boolean(formik.errors.validatePassword)
            }
            helperText={
              formik.touched.validatePassword && formik.errors.validatePassword
            }
          />
          <Button
            type="submit"
            fullWidth
            startIcon={<LoginIcon />}
            variant="contained"
          >
            Registrarme
          </Button>
          <Box style={{ width: "100%" }} marginTop={1} display="flex" gap={1}>
            <Button
              style={{ background: "#4267B2", flexGrow: 1 }}
              startIcon={<FacebookIcon />}
              variant="contained"
              color="secondary"
            >
              Facebook
            </Button>
            <Button
              style={{
                background: "#DB4437",
                color: "white",
                flexGrow: 1,
              }}
              onClick={() => loginGoogle()}
              startIcon={<GoogleIcon />}
              variant="contained"
            >
              Google
            </Button>
          </Box>
        </form>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default Register;
