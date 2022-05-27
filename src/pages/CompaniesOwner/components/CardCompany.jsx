import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openAlert } from "../../../redux/actions/alert";
import { updateLogoCompany } from "../../../api/company/companyService";
import convertImageBase64 from "../../../utils/convertImageBase64";
import { getImage } from "../../../api/image/imageService";
import { useNavigate } from "react-router-dom";

function CardCompany({ company }) {
  const [logo, setLogo] = useState("");
  const [changePhoto, setChangePhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const getImageAPI = async () => {
    const image = await getImage(company.logo);
    setLogo(image);
  };

  useEffect(() => {
    if (company.logo) {
      getImageAPI();
    }
  }, [company]);

  const previewNewLogo = async (event) => {
    const resultLogoImageBase64 = await convertImageBase64(
      event.target.files[0]
    );
    setChangePhoto(true);
    setLogo(resultLogoImageBase64);
  };

  const cancelChangeLogo = async () => {
    setLogo("");
    setChangePhoto(false);
  };

  const openInputFile = () => {
    document.getElementById(company.id).click();
  };

  const updaloadLogo = async () => {
    setLoading(true);
    const resultUpload = await updateLogoCompany({
      id: company.id,
      image: logo,
    });
    if (resultUpload.ok) {
      setChangePhoto(false);
      dispatch(
        openAlert(true, "El logo fue actualizado correctamente", "success")
      );
    }
    setLoading(false);
  };

  return (
    <Card
      sx={{ width: "100%", display: "flex", height: 150, position: "relative" }}
    >
      <input
        style={{ display: "none" }}
        onChange={previewNewLogo}
        type="file"
        id={company.id}
      />
      <CardMedia
        component="img"
        sx={{ width: "30%" }}
        image={logo.length <= 0 ? "/images/image-not-found.webp" : logo}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography color="primary" fontWeight="700" variant="h6">
            {company.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {company.phone}
          </Typography>
          <CardActions
            sx={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            {!changePhoto ? (
              <>
                <Button
                  onClick={() => openInputFile()}
                  size="small"
                  variant="outlined"
                >
                  Cambiar Logo
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  disabled={loading}
                  onClick={() => navigation(`/edit-company/${company.id}`)}
                >
                  Editar
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => cancelChangeLogo()}
                  size="small"
                  variant="outlined"
                  disabled={loading}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => updaloadLogo()}
                >
                  Guardar
                </Button>
              </>
            )}
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}

export default CardCompany;
