import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { openAlert } from "../../../redux/actions/alert";
import convertImageBase64 from "../../../utils/convertImageBase64";
import {
  getImagesMusicRoom,
  removeImageMusicRoom,
  saveRoomImage,
} from "../../../api/musicRoomImages/musicRoomImagesService";
import { getImage } from "../../../api/image/imageService";
import { v4 as uid } from "uuid";
import TitlePage from "../../../components/ui/TitlePage";
import NoData from "../../../components/shared/NoData";
import { Box } from "@mui/system";

function AddImageMusicRoom({ idMusicRoom, closeModal }) {
  const [listImages, setListImages] = useState([]);
  const [newImages, setNewImages] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const getImages = async () => {
    setListImages([]);
    const resultListImages = await getImagesMusicRoom({
      idRoomMusic: idMusicRoom,
    });
    if (resultListImages.data.length > 0) {
      resultListImages.data.forEach(async (element) => {
        const image = {
          id: element.id,
          img: await getImage(element.idImage),
          new: false,
        };
        setListImages((prev) => [...prev, image]);
      });
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const saveImages = () => {
    listImages.forEach(async (image) => {
      if (image.new) {
        const result = await saveRoomImage({
          idRoomMusic: idMusicRoom,
          image: image.img,
        });
        if (result.ok === true) {
          dispatch(openAlert(true, "Realizado: Imagen guardada", "success"));
        }
      }
    });
  };

  const deleteImage = async (id) => {
    const findImage = listImages.findIndex((x) => x.id === id);
    if (!listImages[findImage].new) {
      await removeImageMusicRoom(id);
      dispatch(openAlert(true, "La imagen ha sido eliminada", "success"));
    }
    const cloneState = listImages.filter((x) => x.new !== true);
    const checknewimages = cloneState.findIndex((x) => x.id === true);
    setListImages([...cloneState]);
    if (checknewimages <= 0) {
      setNewImages(false);
    }
  };

  const convertImage = async (event) => {
    const resultConvert = await convertImageBase64(event.target.files[0]);
    const newImge = {
      id: uid(),
      img: resultConvert,
      new: true,
    };
    setNewImages(true);
    setListImages([...listImages, newImge]);
  };

  const chooseFile = () => {
    if (listImages.length >= 4) {
      dispatch(openAlert(true, "Solo Puede Agregar 4 imagenes", "error"));
      return;
    }
    inputRef.current.click();
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        onChange={convertImage}
        type="file"
        ref={inputRef}
      />
      <Card style={{ padding: 4 }}>
        <CardContent>
          <TitlePage title={"Agregar / Eliminar imagenes"} />
          {listImages.length > 0 ? (
            <ImageList sx={{ marginTop: 4, width: "100%" }}>
              {listImages.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={item.img}
                    srcSet={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    actionIcon={
                      <IconButton
                        onClick={() => deleteImage(item.id)}
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`Eliminar imagen`}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          ) : (
            <NoData
              height="11vh"
              message={"No hay imagenes guardadas para esta sala"}
            />
          )}
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Button
              sx={{ marginRight: 1 }}
              onClick={chooseFile}
              variant="contained"
            >
              Agregar Imagen
            </Button>
            {newImages ? (
              <Button variant="outlined" onClick={() => saveImages()}>
                Guardar
              </Button>
            ) : null}
          </Box>
          <Button
            color="error"
            variant="contained"
            onClick={() => closeModal()}
          >
            Cancelar
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default AddImageMusicRoom;
