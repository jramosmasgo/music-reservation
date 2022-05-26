import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getReservationsByUser } from "../../api/reservation/reservationService";
import NoData from "../../components/shared/NoData";
import TitlePage from "../../components/ui/TitlePage";
import CardReservation from "./components/CardReservation";

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const getReservations = async () => {
    const resultGetReservation = await getReservationsByUser();
    setReservations(resultGetReservation.data);
  };

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <div>
      <TitlePage title="Mis reservas" />
      {reservations.length > 0 ? (
        <Grid rowSpacing={1} spacing={2} container>
          {reservations.map((item) => (
            <Grid key={item.id} item sm={12} lg={4} xs={12}>
              <CardReservation reservation={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoData messag="No tiene reservaciones registradas" />
      )}
    </div>
  );
}

export default Reservations;
