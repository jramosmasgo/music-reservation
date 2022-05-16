import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const ModalBox = styled(Box)(({ ancho }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: ancho,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}));
