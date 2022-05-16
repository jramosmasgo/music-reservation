import { FileUpload } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCompanyService } from "../../../api/company/companyService";
import { codeCountries } from "../../../data/codesCountries";
import useForm from "../../../hooks/useForm";
import { openAlert } from "../../../redux/actions/alert";
import { validationRegisterCompanySchema } from "../../../schemas/registerCompany";
import { TextFieldPrimary } from "../../../styles/shared/textField";
import convertImageBase64 from "../../../utils/convertImageBase64";

function FormRegisterCompany() {
  const [name, setName] = useState("");
  const [codPais, setCodPais] = useState("+51");
  const [image64, setImage64] = useState("");
  const dispatch = useDispatch();

  const HandleSubmit = async (data) => {
    if (image64.length <= 0) {
      return dispatch(
        openAlert(true, "El Documento de validacion es nesesario", "error")
      );
    }

    const resultSave = await saveCompanyService({
      name: data.name,
      numberDoc: data.dni,
      validationDoc: image64,
      phone: `${codPais} ${data.phone}`,
    });

    if (resultSave.ok === true) {
      formik.resetForm();
      setName("");
      setImage64("");
      dispatch(
        openAlert(true, "La empresas fue registrada exitosamente", "success")
      );
    }
  };

  const handleConvertImage = async (event) => {
    const resultConvert = await convertImageBase64(event.target.files[0]);
    setImage64(resultConvert);
    setName(event.target.files[0].name);
  };

  const [formik] = useForm(
    { name: "", phone: "", dni: "" },
    validationRegisterCompanySchema,
    HandleSubmit
  );

  const HandleOpenFile = function () {
    document.getElementById("fileValidation").click();
  };

  return (
    <Card>
      <input
        onChange={handleConvertImage}
        style={{ display: "none" }}
        type="file"
        id="fileValidation"
      />
      <CardContent>
        <Typography variant="h6" marginBottom={3}>
          Registro de Nueva empresa
        </Typography>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <TextFieldPrimary
            fullWidth
            name="name"
            autoComplete="off"
            label="Ingrese el nombre de la empresa"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <Box display="flex" gap={1}>
            <FormControl sx={{ minWidth: 120 }} size="medium">
              <InputLabel id="demo-select-small">Cod. Pais</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Cod.Pais"
                name="codPais"
                onChange={(e) => setCodPais(e.target.value)}
                value={codPais}
                defaultValue={codPais}
              >
                {codeCountries.map((data) => (
                  <MenuItem key={data.code} value={data.dial_code}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextFieldPrimary
              fullWidth
              name="phone"
              autoComplete="off"
              label="Numero para contacto"
              type="number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Box>
          <TextFieldPrimary
            fullWidth
            name="dni"
            autoComplete="off"
            label="Dni de Propietario"
            type="text"
            value={formik.values.dni}
            onChange={formik.handleChange}
            error={formik.touched.dni && Boolean(formik.errors.dni)}
            helperText={formik.touched.dni && formik.errors.dni}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Archivo de Validacion
            </InputLabel>
            <OutlinedInput
              disabled
              name="fileValidation"
              value={name}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    aria-label="toggle password visibility"
                    onClick={() => HandleOpenFile()}
                    edge="end"
                  >
                    <FileUpload color="primary" />
                  </IconButton>
                </InputAdornment>
              }
              label="Imagen de Validacion"
            />
          </FormControl>
          <Button
            type="submit"
            sx={{ marginTop: 4 }}
            variant="contained"
            fullWidth
          >
            {" "}
            Registrar Empresa{" "}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default FormRegisterCompany;
