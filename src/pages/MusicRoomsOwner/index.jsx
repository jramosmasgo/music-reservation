import { Button, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import TitlePage from "../../components/ui/TitlePage";
import CardMusicOwnerBand from "./components/CardMusicOwnerBand";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ModalBox } from "../../styles/shared/modal";
import FormRegisterMusicRoom from "./components/FormRegisterMusicRoom";
import NoData from "../../components/shared/NoData";
import { getCompanies } from "../../api/company/companyService";
import { getMusicRoomsByCompany } from "../../api/musicRooms/musicRommService";

function MusicRoomsOwner() {
  const [open, setOpen] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [musicRooms, setMusicRooms] = useState([]);

  const getAllCompanies = async () => {
    const result = await getCompanies();
    setCompanies(result.data);
  };

  const getMusicRooms = () => {
    setMusicRooms([]);
    companies.forEach(async (item) => {
      const result = await getMusicRoomsByCompany(item.id);
      setMusicRooms([...result.data]);
    });
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  useEffect(() => {
    if (companies.length > 0) {
      getMusicRooms();
    }
  }, [companies]);

  return (
    <div>
      <Modal open={open}>
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

      {musicRooms.length <= 0 ? (
        <NoData message="No cuenta salas registradas" />
      ) : (
        <Grid container spacing={2}>
          {musicRooms.map((item) => (
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
