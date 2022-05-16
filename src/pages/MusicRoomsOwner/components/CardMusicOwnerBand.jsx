import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function CardMusicOwnerBand({ item }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/room-detail/${item.id}`);
  };

  return (
    <Card
      sx={{ width: "100%", display: "flex", height: 220, position: "relative" }}
    >
      <CardMedia
        component="img"
        sx={{ width: "40%" }}
        image="https://www.ibeatusa.com/wp-content/uploads/2017/12/decorate-a-music-room.jpg"
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
            {item.Company.name}
          </Typography>
          <CardActions
            sx={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleRedirect()}
            >
              Ver/Editar
            </Button>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}

export default CardMusicOwnerBand;
