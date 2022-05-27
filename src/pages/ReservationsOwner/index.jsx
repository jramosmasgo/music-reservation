import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getMusicRoomsByUser } from "../../api/musicRooms/musicRommService";
import { getReservationsByMusicRoom } from "../../api/reservation/reservationService";
import NoData from "../../components/shared/NoData";
import CardRerservationSkeleton from "../../components/skeletons/CardRerservationSkeleton";
import TitlePage from "../../components/ui/TitlePage";
import CardReservationOwner from "./components/CardReservationOwner";

function ReservationOwner() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMusicRooms = async () => {
    setLoading(true);
    setReservations([]);
    const result = await getMusicRoomsByUser();
    if (result.data.length >= 0) {
      result.data.forEach(async (room) => {
        const reservationsById = await getReservationsByMusicRoom(room.id);
        if (reservationsById.data.length > 0) {
          console.log(reservationsById);
          setReservations((prev) => [...prev, ...reservationsById.data]);
        }
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    getMusicRooms();
  }, []);

  return (
    <div>
      <TitlePage title="Lista de Reservas registradas" />
      {reservations.length > 0 ? (
        <Grid container spacing={2}>
          {reservations.length > 0
            ? reservations.map((room) => (
                <Grid key={room.id} item md={4}>
                  <CardReservationOwner
                    updateListResrvations={getMusicRooms}
                    reservation={room}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      ) : loading ? (
        <CardRerservationSkeleton />
      ) : (
        <NoData message="No hay reservaciones" />
      )}
    </div>
  );
}

export default ReservationOwner;
