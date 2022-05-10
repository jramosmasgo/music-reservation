import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const StyledSpan = styled(Typography)(() => ({
  display: "inline",
}));

function CardMusicRoom() {
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
        <Button variant="contained">Ver Detalles</Button>
      </Box>
      <CardContent>
        <Typography
          style={{ display: "inline" }}
          variant="h6"
          sx={{ fontWeight: "700" }}
        >
          La Roca Studios{" "}
        </Typography>
        <StyledSpan variant="h6" color="primary">
          | Sala 1
        </StyledSpan>
      </CardContent>
    </Card>
  );
}

export default CardMusicRoom;
