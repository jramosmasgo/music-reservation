import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import TitlePage from "../../components/ui/TitlePage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate, useParams } from "react-router-dom";
import { getMusicRoomById } from "../../api/musicRooms/musicRommService";
import { getImagesMusicRoom } from "../../api/musicRoomImages/musicRoomImagesService";
import moment from "moment";
import { codesCurrency } from "../../data/codesCurrency";

function MusicRoomDetails() {
  const [detailMusicRoom, setDetailMusicRoom] = useState({});
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const { idRoom } = useParams();

  const getDetailsMusicRoom = async () => {
    const result = await getMusicRoomById(idRoom);
    setDetailMusicRoom(result.data);
  };

  const getAllImages = async () => {
    const resultImages = await getImagesMusicRoom({ idRoomMusic: idRoom });
    if (resultImages.data.length > 0) {
      setImages(resultImages.data);
    }
  };

  const getMoney = (cc) => {
    return codesCurrency.find((x) => x.cc === cc);
  };

  useEffect(() => {
    getDetailsMusicRoom();
    getAllImages();
  }, []);

  return (
    <div>
      <TitlePage title={"Detalles de la sala"} />
      <Grid container spacing={3}>
        <Grid item xl={6} lg={6} md={12} sm={12}>
          {images.length > 0 ? (
            <Carousel showArrows>
              {images.map((item) => (
                <div key={item.id}>
                  <img src={item.Image.url} alt={item.id} />
                </div>
              ))}
            </Carousel>
          ) : null}
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12}>
          <Card>
            <CardContent sx={{ padding: 3 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                marginBottom={4}
              >
                <TitlePage style={{}} title={"Descripcion de la sala"} />
                <Button
                  onClick={() =>
                    navigate(`/music-room-schedule/${detailMusicRoom.id}`)
                  }
                  variant="outlined"
                  style={{ height: 40 }}
                >
                  Crear Reserva
                </Button>
              </Box>
              <Grid container spacing={3} rowSpacing={4}>
                <Grid item xl={6} lg={6} md={6} sm={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Nombre:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {detailMusicRoom.name}
                  </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Precio Hora:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {getMoney(detailMusicRoom.currencyWorld).symbol}
                    {detailMusicRoom.priceHour}
                  </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Empresas:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {detailMusicRoom.Company?.name}
                  </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Telefono:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {detailMusicRoom.phone}
                  </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Encargado:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    juan Perz
                  </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Atencion:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {moment(detailMusicRoom.openingHours)
                      .format("hh:mm A")
                      .toString()}{" "}
                    -
                    {moment(detailMusicRoom.closeHours)
                      .format("hh:mm A")
                      .toString()}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Direccion:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {detailMusicRoom.address} {" - "}
                    {detailMusicRoom.city}
                    {" - "}
                    {detailMusicRoom.country}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Descripcion:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {detailMusicRoom.description}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default MusicRoomDetails;
