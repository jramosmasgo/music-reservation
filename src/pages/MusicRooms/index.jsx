import { Grid } from "@mui/material";
import React from "react";
import CardMusicRoom from "../../components/shared/CardMusicRoom";
import TitlePage from "../../components/ui/TitlePage";

function MusicRooms() {
  return (
    <>
      <TitlePage title="Lista de salas" />
      <Grid container spacing={4}>
        <Grid item xl={4} lg={4} md={6} sm={12}>
          <CardMusicRoom />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12}>
          <CardMusicRoom />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12}>
          <CardMusicRoom />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12}>
          <CardMusicRoom />
        </Grid>
      </Grid>
    </>
  );
}

export default MusicRooms;
