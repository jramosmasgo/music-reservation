import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Grid container rowSpacing={3} spacing={2}>
      <Grid item lg={12}>
        <header
          style={{ backgroundImage: "url(/images/fondo3.jpg)" }}
          className="header"
        >
          <Box
            display="flex"
            flexDirection="column"
            height="75vh"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              color="ButtonFace"
              sx={{ marginBottom: 2 }}
              variant="h2"
              fontWeight="500"
            >
              Bienvenido a Music Reservation
            </Typography>
            <Button onClick={() => navigate("/music-rooms")} variant="outlined">
              Ver las salas de ensayo
            </Button>
          </Box>
        </header>
      </Grid>
    </Grid>
  );
}

export default Home;
