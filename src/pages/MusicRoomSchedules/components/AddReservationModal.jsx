import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveReservation } from "../../../api/reservation/reservationService";
import { openAlert } from "../../../redux/actions/alert";

function AddReservationModal({ close, dateSelect, idMusicRoom }) {
  const [value, setValue] = useState(new Date());
  const [hours, setHours] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(moment(dateSelect));
  }, [dateSelect]);

  const saveReservationModal = async () => {
    if (value <= moment()) {
      return dispatch(
        openAlert(
          true,
          "Seleccione una fecha mayor a la de este momento",
          "error"
        )
      );
    }

    const resultSaveReservation = await saveReservation({
      band: null,
      date: moment(value).utc().toDate(),
      musicRoom: idMusicRoom,
      state: 1,
      endDate: moment(value).add(hours, "hours").utc().toDate(),
    });

    if (resultSaveReservation.ok) {
      dispatch(openAlert(true, "Reserva Realizada", "success"));
      close();
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" marginBottom={3}>
          Seleccionar Detalles de Reserva
        </Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            renderInput={(props) => <TextField focused fullWidth {...props} />}
            label="Fecha y Hora de Reserva"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
        {/* <FormControl style={{ marginTop: 20 }} fullWidth size="medium">
          <InputLabel>Selecione una banda (Opcional)</InputLabel>
          <Select
            defaultValue="choose"
            label="Seleccione una Banda (Opcional)"
            name="collaborator"
          >
            <MenuItem disabled value="choose">
              Ninguna
            </MenuItem>
          </Select>
          <FormHelperText sx={{ color: "red" }}></FormHelperText>
        </FormControl> */}
        <Box sx={{ width: "100%", padding: "0 15px", margin: "25px 0" }}>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={4}
            onChange={(e) => setHours(e.target.value)}
          />
        </Box>
        <CardActions style={{ marginTop: 5 }}>
          <Button onClick={() => saveReservationModal()} variant="contained">
            Registrar Reserva
          </Button>
          <Button onClick={() => close()} variant="outlined" color="error">
            Cancelar
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default AddReservationModal;
