import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import moment from "moment";
import { Box } from "@mui/system";
import { SidenavDivider } from "../../../styles/shared/sidenav";

function CardReservation({ reservation }) {
  const date = moment(reservation.date).toDate().toLocaleString();
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
      <CardContent>
        <Typography
          sx={{ fontSize: 16, marginBottom: 1 }}
          color="primary"
          gutterBottom
          fontWeight="700"
        >
          {reservation.MusicRoom?.name}
        </Typography>
        <SidenavDivider />
        <Typography
          sx={{ marginBottom: 1, marginTop: 2 }}
          variant="body2"
          component="div"
        >
          Fecha : {date}
        </Typography>
        <Typography
          sx={{ marginBottom: 1 }}
          variant="body2"
          color="text.secondary"
          component="div"
        >
          Empresa : {reservation.MusicRoom?.Company?.name}
        </Typography>
        <Typography variant="body2" component="div">
          Horario Solicitado :{" "}
          {moment(reservation.date).format("h:mm a").toString()} -{" "}
          {moment(reservation.endDate).format("h:mm a").toString()}
        </Typography>
      </CardContent>
      <CardActions sx={{ float: "right" }}>
        {stateReservation(reservation.state)}
      </CardActions>
    </Card>
  );
}

export default CardReservation;
