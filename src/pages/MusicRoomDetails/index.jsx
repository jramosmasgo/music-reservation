import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import TitlePage from "../../components/ui/TitlePage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { getMusicRoomById } from "../../api/musicRooms/musicRommService";

function MusicRoomDetails() {
  const [detailMusicRoom, setDetailMusicRoom] = useState({});
  const { idRoom } = useParams();

  const getDetailsMusicRoom = async () => {
    const result = await getMusicRoomById(idRoom);
    setDetailMusicRoom(result.data);
  };

  useEffect(() => {
    getDetailsMusicRoom();
  }, [idRoom]);

  return (
    <div>
      <TitlePage title={"Detalles de la sala"} />
      <Grid container spacing={3}>
        <Grid item xl={6} lg={6} md={12} sm={12}>
          <Carousel showArrows>
            <div>
              <img
                src="https://i.pinimg.com/originals/5a/6a/33/5a6a33dce85d59fabc7c446fab47265e.jpg"
                alt=""
              />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/originals/5a/6a/33/5a6a33dce85d59fabc7c446fab47265e.jpg"
                alt=""
              />
              <p className="legend">Legend 1</p>
            </div>
          </Carousel>
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
                <Button variant="outlined" style={{ height: 40 }}>
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
                    Direccion:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {`${detailMusicRoom.address}, ${detailMusicRoom.city}, ${detailMusicRoom.country}`}
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
                <Grid item xs={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Descripcion:
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis et iste non eligendi sed aspernatur accusantium dolor
                    eum, modi, magnam in veniam incidunt harum facere expedita
                    excepturi aliquid nobis illum!
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
