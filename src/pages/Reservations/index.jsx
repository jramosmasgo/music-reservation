import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getReservationsByUser } from "../../api/reservation/reservationService";
import TitlePage from "../../components/ui/TitlePage";
import CardReservation from "./components/CardReservation";

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const getReservations = async () => {
    const resultGetReservation = await getReservationsByUser();
    console.log(resultGetReservation.data);
    setReservations(resultGetReservation.data);
  };

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <div>
      <TitlePage title="Mis reservas" />
      <Grid rowSpacing={1} container>
        {reservations.map((item) => (
          <Grid key={item.id} item xs={12}>
            <CardReservation reservation={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Reservations;
