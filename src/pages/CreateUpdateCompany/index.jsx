import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import TitlePage from "../../components/ui/TitlePage";
import FormCreateUpdateCompany from "./components/FormCreateUpdateCompany";
import TableListCollaborators from "./components/TableListCollaborators";

function CreateUpdateCompany() {
  const params = useParams();

  return (
    <div>
      <TitlePage
        title={
          !params.idCompany ? "Creacion de compania" : "Edicion de compania"
        }
      />
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <FormCreateUpdateCompany
            idCompany={!params.idCompany ? null : params.idCompany}
          />
        </Grid>
        {params.idCompany ? (
          <Grid item xs={7}>
            <TableListCollaborators
              idCompany={!params.idCompany ? null : params.idCompany}
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default CreateUpdateCompany;
