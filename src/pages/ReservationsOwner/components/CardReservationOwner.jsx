import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { updateReservation } from "../../../api/reservation/reservationService";
import { openAlert } from "../../../redux/actions/alert";
import { SidenavDivider } from "../../../styles/shared/sidenav";

function CardReservationOwner({ reservation, updateListResrvations }) {
  const dispatch = useDispatch();
  const date = moment(reservation.date).toDate().toLocaleString();

  const approveRejectReservation = async (numberState) => {
    const resultUpdate = await updateReservation(
      {
        state: numberState,
      },
      reservation.id
    );
    if (resultUpdate.ok) {
      if (numberState === 2) {
        dispatch(
          openAlert(true, "Realizado: La peticion fue aceptada", "success")
        );
      } else {
        dispatch(
          openAlert(true, "Realizado: La peticion fue rechazada", "success")
        );
      }
      updateListResrvations();
    }
  };

  return (
    <div>
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
          <Typography
            sx={{ marginBottom: 1 }}
            variant="body2"
            color="text.secondary"
            component="div"
          >
            Usuario : {reservation.User?.fullname}
          </Typography>
          <Typography variant="body2" component="div">
            Horario Solicitado :{" "}
            {moment(reservation.date).format("h:mm a").toString()} -{" "}
            {moment(reservation.endDate).format("h:mm a").toString()}
          </Typography>
        </CardContent>
        <CardActions sx={{ float: "right" }}>
          {reservation.state === 1 ? (
            <>
              <Button
                onClick={() => approveRejectReservation(3)}
                color="error"
                size="small"
              >
                Rechazar
              </Button>
              <Button
                onClick={() => approveRejectReservation(2)}
                variant="outlined"
                size="small"
              >
                Aceptar
              </Button>
            </>
          ) : reservation.state === 2 ? (
            <Chip label="Aceptado" color="success" variant="outlined" />
          ) : (
            <Chip label="Rechazado" color="error" variant="outlined" />
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default CardReservationOwner;
