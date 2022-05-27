import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImagesMusicRoom } from "../../../api/musicRoomImages/musicRoomImagesService";
import { getMusicRoomById } from "../../../api/musicRooms/musicRommService";
import { ModalBox } from "../../../styles/shared/modal";
import AddImageMusicRoom from "./AddImageMusicRoom";

function CardMusicOwnerBand({ item, functionFather }) {
  const [openEditImages, setOpenEditImages] = useState(false);
  const [images, setImages] = useState([]);
  const [infoMusicRoom, setInfoMusicRoom] = useState({});
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/room-detail/${item.id}`);
  };

  const handleCloseModal = () => {
    getAllImages();
    functionFather();
    setOpenEditImages(false);
  };

  const getInfoMusicRoom = async () => {
    const resultGetInfo = await getMusicRoomById(item.id);
    setInfoMusicRoom(resultGetInfo.data);
  };

  const getAllImages = async () => {
    const resultImages = await getImagesMusicRoom({ idRoomMusic: item.id });
    if (resultImages.data.length > 0) {
      setImages(resultImages.data);
    }
  };

  useEffect(() => {
    getInfoMusicRoom();
    getAllImages();
  }, []);

  return (
    <>
      <Modal onClose={() => handleCloseModal()} open={openEditImages}>
        <ModalBox ancho={650}>
          <AddImageMusicRoom
            closeModal={handleCloseModal}
            idMusicRoom={item.id}
          />
        </ModalBox>
      </Modal>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          height: 220,
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "40%" }}
          image={
            images.length > 0
              ? images[0].Image.url
              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          }
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography color="primary" variant="h5">
              {item.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {infoMusicRoom.Company?.name}
            </Typography>
            <CardActions
              sx={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              <Button onClick={() => setOpenEditImages(true)}>
                Editar Fotos
              </Button>
              {/* <Button
                variant="outlined"
                size="small"
                onClick={() => handleRedirect()}
              >
                Ver/Editar
              </Button> */}
            </CardActions>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}

export default CardMusicOwnerBand;
