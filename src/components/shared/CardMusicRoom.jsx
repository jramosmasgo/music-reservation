import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getImagesMusicRoom } from "../../api/musicRoomImages/musicRoomImagesService";

const StyledSpan = styled(Typography)(() => ({
  display: "inline",
}));

function CardMusicRoom({ dataMusicRoom }) {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const getAllImages = async () => {
    const resultImages = await getImagesMusicRoom({
      idRoomMusic: dataMusicRoom.id,
    });
    if (resultImages.data.length > 0) {
      setImages(resultImages.data);
    }
  };

  useEffect(() => {
    getAllImages();
  }, [dataMusicRoom]);

  return (
    <Card sx={{ width: "100%", position: "relative" }}>
      <CardMedia
        sx={{ maxWidth: "100%" }}
        component="img"
        height="280"
        image={
          images.length > 0
            ? images[0].Image.url
            : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
        alt="image-music-room"
      />
      <Box sx={{ position: "absolute", top: "230px", right: "10px" }}>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/room-detail/${dataMusicRoom.id}`);
          }}
        >
          Ver Detalles
        </Button>
      </Box>
      <CardContent>
        <Typography
          style={{ display: "inline" }}
          variant="h6"
          sx={{ fontWeight: "700" }}
        >
          {dataMusicRoom.name}{" "}
        </Typography>
        <StyledSpan variant="h6" color="primary">
          | {dataMusicRoom.Company.name}
        </StyledSpan>
      </CardContent>
    </Card>
  );
}

export default CardMusicRoom;
