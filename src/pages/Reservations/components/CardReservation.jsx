import { Card, CardContent, Chip, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import { Box } from "@mui/system";

function CardReservation({ reservation }) {
  const stateReservation = (status) => {
    switch (status) {
      case 1:
        return <Chip label="Pendiente" color="warning" variant="outlined" />;
      case 2:
        return <Chip label="Confirmado" color="success" variant="outlined" />;
      case 3:
        return <Chip label="Rechazado" color="error" variant="outlined" />;
      default:
        return <Chip label="Pendiente" color="warning" variant="outlined" />;
    }
  };

  return (
    <Card>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography color="primary" fontWeight={500}>
          Sala : {reservation.MusicRoom.Company.name} -{" "}
          {reservation.MusicRoom.name}
        </Typography>
        <Typography>
          Fecha : {moment(reservation.date).toDate().toDateString()}
        </Typography>
        <Typography>
          Incio : {moment(reservation.date).format("hh:mm")}
        </Typography>
        <Typography>
          Fin : {moment(reservation.endDate).format("hh:mm")}
        </Typography>
        <Box>{stateReservation(reservation.state)}</Box>
      </CardContent>
    </Card>
  );
}

export default CardReservation;
