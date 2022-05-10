import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TitlePage from "../../components/ui/TitlePage";

function MusicRoomDetails() {
  return (
    <>
      <TitlePage title={"Detalles de la sala"} />;
      <Grid container>
        <Box></Box>
      </Grid>
    </>
  );
}

export default MusicRoomDetails;
