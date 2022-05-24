import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserService,
  updateImageProfileService,
} from "../../api/user/userService";
import TitlePage from "../../components/ui/TitlePage";
import { updateFirebase } from "../../firebase/auth/registerFirebase";
import { openAlert } from "../../redux/actions/alert";
import { ModalBox } from "../../styles/shared/modal";
import convertImageBase64 from "../../utils/convertImageBase64";
import EnableCreateCompanyModal from "./components/EnableCreateCompanyModal";
import FormUpdateDataModel from "./components/FormUpdateDataModel";

function Profile() {
  const stateAuth = useSelector((state) => state.auth);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [imageProfile, setImageProfile] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  );
  const [user, setUser] = useState({});
  const [stateChangeImage, setStateChangeImage] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalCreateCompany, setOpenModalCreateCompany] = useState(false);

  const getAllDataUser = async () => {
    if (stateAuth.email) {
      const resultGetUser = await getUserService(stateAuth.email);
      setUser(resultGetUser.data);
      if (resultGetUser.data.profileImage) {
        setImageProfile(resultGetUser.data.Image.url);
      }
    }
  };

  const convertImage = async (event) => {
    const resultConvert = await convertImageBase64(event.target.files[0]);
    setStateChangeImage(true);
    setImageProfile(resultConvert);
  };

  const updloadImage = async () => {
    const resultUpload = await updateImageProfileService(imageProfile);
    console.log(resultUpload);

    if (resultUpload.data.Image) {
      await updateFirebase({ photoURL: resultUpload.data.Image.url });
    }
    if (resultUpload.ok) {
      setStateChangeImage(false);
      dispatch(
        openAlert(
          true,
          "Realizado: La imagen su actualizada correctamente",
          "success"
        )
      );
    }
  };

  const cancelUplad = async () => {
    setStateChangeImage(false);
    setImageProfile(
      user.profileImage
        ? user.Image.url
        : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
    );
  };

  const chooseFile = () => {
    inputRef.current.click();
  };

  const closeModalUpdate = async () => {
    setOpenModalUpdate(false);
    getAllDataUser();
  };

  const closeModalEnableCreateCompany = async () => {
    setOpenModalCreateCompany(false);
    getAllDataUser();
  };

  useEffect(() => {
    getAllDataUser();
  }, [stateAuth.email]);

  return (
    <div>
      <Modal onClose={() => setOpenModalUpdate(false)} open={openModalUpdate}>
        <ModalBox ancho={400} clo>
          <FormUpdateDataModel user={user} close={closeModalUpdate} />
        </ModalBox>
      </Modal>
      <Modal
        onClose={() => setOpenModalCreateCompany(false)}
        open={openModalCreateCompany}
      >
        <ModalBox ancho={400} clo>
          <EnableCreateCompanyModal close={closeModalEnableCreateCompany} />
        </ModalBox>
      </Modal>
      <input
        type="file"
        onChange={convertImage}
        ref={inputRef}
        style={{ display: "none" }}
      />
      <TitlePage title="Mi perfil" />
      <Grid spacing={2} container>
        <Grid item xl={4} lg={4} md={12} sm={12}>
          <Card>
            <CardMedia
              component="img"
              height="344"
              image={imageProfile}
              alt="Paella dish"
            />
            <CardActions>
              {!stateChangeImage ? (
                <Button onClick={() => chooseFile()}>Cambiar imagen</Button>
              ) : (
                <div>
                  <Button onClick={() => updloadImage()} variant="contained">
                    Guardar cambio
                  </Button>
                  <Button
                    onClick={() => cancelUplad()}
                    color="error"
                    variant="outlined"
                  >
                    Cancelar
                  </Button>
                </div>
              )}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xl={7} lg={7} md={12} sm={12}>
          <Card sx={{ padding: "0 25px" }}>
            <CardContent>
              <Box
                marginBottom={1}
                display="flex"
                justifyContent="space-between"
              >
                <TitlePage style={{}} title={"Mis Datos"} />
                {user.companyCreator ? (
                  <>{}</>
                ) : (
                  <Button
                    onClick={() => setOpenModalCreateCompany(true)}
                    variant="outlined"
                    size="small"
                    style={{ height: 40 }}
                  >
                    Registro Empresas
                  </Button>
                )}
              </Box>
              <Grid container>
                <Grid
                  sx={{ marginBottom: 3 }}
                  item
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    Nombre:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {user.fullname}
                  </Typography>
                </Grid>
                <Grid
                  sx={{ marginBottom: 3 }}
                  item
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    Email:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {user.email}
                  </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={12} sm={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Telefono:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {user.phone ?? "No especificado"}
                  </Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} marginTop={4}>
                  <Button
                    onClick={() => setOpenModalUpdate(true)}
                    variant="contained"
                  >
                    Actualizar Datos
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
