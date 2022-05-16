import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getMusicRooms } from "../../api/musicRooms/musicRommService";
import CardMusicRoom from "../../components/shared/CardMusicRoom";
import TitlePage from "../../components/ui/TitlePage";

function MusicRooms() {
  const [musicRomms, setMusicRomms] = useState([]);

  const getAllMusicRooms = async () => {
    const result = await getMusicRooms();
    console.log(result);
    setMusicRomms(result.data);
  };

  useEffect(() => {
    getAllMusicRooms();
  }, []);

  return (
    <>
      <TitlePage title="Lista de salas" />
      <Grid container spacing={4}>
        {musicRomms.map((item) => (
          <Grid key={item.id} item xl={4} lg={4} md={6} sm={12}>
            <CardMusicRoom dataMusicRoom={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MusicRooms;
