import { Button, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import TitlePage from "../../components/ui/TitlePage";
import CardMusicOwnerBand from "./components/CardMusicOwnerBand";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ModalBox } from "../../styles/shared/modal";
import FormRegisterMusicRoom from "./components/FormRegisterMusicRoom";
import NoData from "../../components/shared/NoData";
import { getMusicRoomsByUser } from "../../api/musicRooms/musicRommService";
import AddImageMusicRoom from "./components/AddImageMusicRoom";
import CardSkeletonMusicRoomOwner from "../../components/skeletons/CardSkeletonMusicRoomOwner";

function MusicRoomsOwner() {
  const [open, setOpen] = useState(false);
  const [allMusicRooms, setAllMusicRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMusicRooms = async () => {
    setLoading(true);
    const result = await getMusicRoomsByUser();
    setAllMusicRooms(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getMusicRooms();
  }, []);

  return (
    <div>
      <Modal onClose={() => setOpen(false)} open={open}>
        <ModalBox ancho={600}>
          <FormRegisterMusicRoom />
        </ModalBox>
      </Modal>
      <Box display="flex" justifyContent="space-between">
        <TitlePage title="Mis salas registradas" />
        <Button
          onClick={() => setOpen(true)}
          startIcon={<AddCircleOutlineIcon />}
          variant="contained"
          size="small"
          sx={{ height: 35 }}
        >
          Agregar Nuevo
        </Button>
      </Box>
      {allMusicRooms.length <= 0 ? (
        loading ? (
          <CardSkeletonMusicRoomOwner />
        ) : (
          <NoData message="No cuenta salas registradas" />
        )
      ) : (
        <Grid container spacing={2}>
          {allMusicRooms.map((item) => (
            <Grid key={item.id} item xl={6} lg={6} md={6} sm={12}>
              <CardMusicOwnerBand item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default MusicRoomsOwner;
