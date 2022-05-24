import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateUserService } from "../../../api/user/userService";
import { openAlert } from "../../../redux/actions/alert";

function EnableCreateCompanyModal({ close }) {
  const dispatch = useDispatch();

  const enableCreateCompany = async () => {
    const resultUpdate = await updateUserService({ companyCreator: true });
    if (resultUpdate.ok) {
      dispatch(
        openAlert(
          true,
          "Realizado: Se habilito el registro de empresas",
          "success"
        )
      );
      close();
    }
  };

  return (
    <div>
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Typography variant="h5">Habilitar registro de empresas</Typography>
          <br />
          <Typography>
            Esta opcion le permitira al usuario el registro de companias y salas
            de ensayo musicales que desee publicar en la plataforma. Para
            habilitar esta opcion debe estar seguro de tener la documentacion
            necesaria que valide la existencia de dichas companias
          </Typography>
          <br />
          <Button
            onClick={() => enableCreateCompany()}
            variant="outlined"
            color="warning"
          >
            Habilitar
          </Button>
          &nbsp;
          <Button onClick={() => close()} variant="outlined" color="error">
            Cancelar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default EnableCreateCompanyModal;
