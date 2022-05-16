import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledSpan = styled(Typography)(() => ({
  display: "inline",
}));

function CardMusicRoom({ dataMusicRoom }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: "100%", position: "relative" }}>
      <CardMedia
        sx={{ maxWidth: "100%" }}
        component="img"
        height="280"
        image="https://s3.amazonaws.com/images.seroundtable.com/google-london-music-room-1437651418.jpg"
        alt="green iguana"
      />
      <Box sx={{ position: "absolute", bottom: "80px", right: "10px" }}>
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
