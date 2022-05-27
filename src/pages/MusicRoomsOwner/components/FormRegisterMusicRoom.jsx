import { LocalizationProvider, TimePicker } from "@mui/lab";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getCollaborator } from "../../../api/collaborator/collaboratorService";
import { getCompanies } from "../../../api/company/companyService";
import { saveMusicRoom } from "../../../api/musicRooms/musicRommService";
import { getAllCountries } from "../../../api/ubigeo/ubigeoService";
import useForm from "../../../hooks/useForm";
import { validationRegisterMusicRoomSchema } from "../../../schemas/registerMusicRoom";
import { TextFieldPrimary } from "../../../styles/shared/textField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { codesCurrency } from "../../../data/codesCurrency";
import { useDispatch } from "react-redux";
import { openAlert } from "../../../redux/actions/alert";

function FormRegisterMusicRoom({ closeFunction }) {
  const [countries, setCountries] = useState([]);
  const [countrySelect, setCountrySelect] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [startHour, setStartHour] = useState(moment({ hour: 9, minute: 0 }));
  const [finishHour, setFinishHour] = useState(moment({ hour: 22, minute: 0 }));
  const dispatch = useDispatch();

  const getCountries = async () => {
    const results = await getAllCountries();
    setCountries(results.data);
  };

  const getAllCompanies = async () => {
    const results = await getCompanies();
    setCompanies(results.data);
  };

  const getCollaborators = async (event) => {
    const results = await getCollaborator(event.target.value);
    setCollaborators(results.data);
    formik.handleChange(event);
  };

  const getCities = (event) => {
    const country = countries.find((x) => x.country === event.target.value);
    setCountrySelect(country.cities);
    formik.handleChange(event);
  };

  useEffect(() => {
    getCountries();
    getAllCompanies();
  }, []);

  const handleSubmit = async (data) => {
    console.log(finishHour.hour(), startHour.hour());
    if (finishHour.hour() < startHour.hour()) {
      return dispatch(
        openAlert(
          true,
          "La hora de cierre debe ser mayor a la de apertura.",
          "error"
        )
      );
    }

    const resultSave = await saveMusicRoom({
      ...data,
      openingHours: startHour.toDate(),
      closeHours: finishHour.toDate(),
    });

    if (resultSave.ok === true) {
      formik.resetForm();
      dispatch(
        openAlert(true, "Se ha registrado la sala de música.", "success")
      );
      closeFunction();
    }
  };

  const [formik] = useForm(
    {
      name: "",
      country: "choose",
      city: "choose",
      company: "choose",
      collaborator: "choose",
      address: "",
      phone: "",
      description: "",
      priceHour: 0,
      currencyWorld: "choose",
    },
    validationRegisterMusicRoomSchema,
    handleSubmit
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" marginBottom={2}>
          Registro de Nueva Sala de Musica
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextFieldPrimary
            fullWidth
            autoComplete="off"
            name="name"
            label="Ingrese el nombre de la sala"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <Box display="flex" marginBottom={2} gap={1}>
            <FormControl fullWidth size="medium">
              <InputLabel>Seleccione su pais</InputLabel>
              <Select
                label="Seleccione su pais"
                name="country"
                defaultValue="choose"
                onChange={getCities}
                value={formik.values.country}
                error={formik.touched.country && Boolean(formik.errors.country)}
              >
                <MenuItem disabled value="choose">
                  Choose Option
                </MenuItem>
                {countries.map((data, index) => (
                  <MenuItem key={index} value={data.country}>
                    {data.country}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: "red" }}>
                {formik.touched.country && formik.errors.country}
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth size="medium">
              <InputLabel>Seleccione la ciudad</InputLabel>
              <Select
                label="Seleccione la ciudad"
                defaultValue="choose"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
              >
                <MenuItem disabled value="choose">
                  {countrySelect.length > 0
                    ? "Seleccione la ciudad"
                    : "Primero selecciona un pais"}
                </MenuItem>
                {countrySelect.map((data, index) => (
                  <MenuItem key={index} value={data}>
                    {data}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: "red" }}>
                {formik.touched.city && formik.errors.city}
              </FormHelperText>
            </FormControl>
          </Box>
          <Box display="flex" marginBottom={2} gap={1}>
            <FormControl fullWidth size="medium">
              <InputLabel>Seleccione la empresa</InputLabel>
              <Select
                label="Seleccione la empresa"
                name="company"
                onChange={getCollaborators}
                defaultValue="choose"
                value={formik.values.company}
                error={formik.touched.company && Boolean(formik.errors.company)}
              >
                <MenuItem disabled value="choose">
                  Seleccione una empresa
                </MenuItem>
                {companies.map((data) => (
                  <MenuItem key={data.id} value={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: "red" }}>
                {formik.touched.company && formik.errors.company}
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth size="medium">
              <InputLabel>Elija a un encargado</InputLabel>
              <Select
                label="Elija a un encargado"
                defaultValue="choose"
                name="collaborator"
                onChange={formik.handleChange}
                value={formik.values.collaborator}
                error={
                  formik.touched.collaborator &&
                  Boolean(formik.errors.collaborator)
                }
              >
                <MenuItem disabled value="choose">
                  {collaborators.length > 0
                    ? "Seleccione un encargado"
                    : "Primero seleccione la empresa"}
                </MenuItem>
                {collaborators.map((data) => (
                  <MenuItem key={data.id} value={data.id}>
                    {data.User.fullname}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: "red" }}>
                {formik.touched.collaborator && formik.errors.collaborator}
              </FormHelperText>
            </FormControl>
          </Box>
          <TextFieldPrimary
            fullWidth
            name="address"
            autoComplete="off"
            label="Ingrese la direccion de la sala"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <TextFieldPrimary
            fullWidth
            name="phone"
            autoComplete="off"
            label="Ingrese el telefono de contacto de la empresa"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <Box display="flex" marginBottom={0} gap={1}>
            <TextFieldPrimary
              fullWidth
              name="priceHour"
              autoComplete="off"
              label="Ingrese el precio de por hora"
              type="number"
              value={formik.values.priceHour}
              onChange={formik.handleChange}
              error={
                formik.touched.priceHour && Boolean(formik.errors.priceHour)
              }
              helperText={formik.touched.priceHour && formik.errors.priceHour}
            />
            <FormControl fullWidth size="medium">
              <InputLabel>Seleccione la moneda</InputLabel>
              <Select
                name="currencyWorld"
                defaultValue="choose"
                label="Seleccione la moneda"
                onChange={formik.handleChange}
                value={formik.values.currencyWorld}
                error={
                  formik.touched.currencyWorld &&
                  Boolean(formik.errors.currencyWorld)
                }
              >
                <MenuItem disabled value="choose">
                  Choose Option
                </MenuItem>
                {codesCurrency.map((data, index) => (
                  <MenuItem key={index} value={data.cc}>
                    {data.name} - {data.symbol}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: "red" }}>
                {formik.touched.currencyWorld && formik.errors.currencyWorld}
              </FormHelperText>
            </FormControl>
          </Box>
          <Box display="flex" marginBottom={2} gap={1}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <TimePicker
                label="Horario de apertura"
                value={startHour}
                onChange={(newValue) => {
                  setStartHour(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
              <TimePicker
                label="Horario de Cierre"
                value={finishHour}
                onChange={(newValue) => {
                  setFinishHour(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <TextFieldPrimary
            fullWidth
            name="description"
            autoComplete="off"
            multiline
            rows={5}
            label="Descripcion de la sala"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <Button
            type="submit"
            sx={{ marginTop: 0 }}
            variant="contained"
            fullWidth
          >
            {" "}
            Registrar Sala{" "}
          </Button>
          <Button
            style={{ marginTop: "1rem" }}
            type="button"
            onClick={() => {
              closeFunction();
            }}
            sx={{ marginTop: 0 }}
            variant="contained"
            color="error"
            fullWidth
          >
            {" "}
            Cancelar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default FormRegisterMusicRoom;
