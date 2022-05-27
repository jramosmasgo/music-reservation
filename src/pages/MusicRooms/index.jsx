import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getMusicRooms } from "../../api/musicRooms/musicRommService";
import CardMusicRoom from "../../components/shared/CardMusicRoom";
import NoData from "../../components/shared/NoData";
import CardMusicRoomSkeleton from "../../components/skeletons/CardMusicRoomSkeleton";
import TitlePage from "../../components/ui/TitlePage";

function MusicRooms() {
  const [musicRomms, setMusicRomms] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllMusicRooms = async () => {
    setLoading(true);
    const result = await getMusicRooms();
    setMusicRomms(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllMusicRooms();
  }, []);

  return (
    <>
      <TitlePage title="Lista de salas" />
      {musicRomms.length > 0 ? (
        <Grid container spacing={2}>
          {musicRomms.map((item) => (
            <Grid item key={item.id} xl={4} lg={4} md={6}>
              <CardMusicRoom dataMusicRoom={item} />
            </Grid>
          ))}
        </Grid>
      ) : !loading ? (
        <NoData message="No tiene salas registradas" />
      ) : (
        <CardMusicRoomSkeleton />
      )}
    </>
  );
}

export default MusicRooms;
