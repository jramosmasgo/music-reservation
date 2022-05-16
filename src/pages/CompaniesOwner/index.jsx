import { Grid } from "@mui/material";
import React from "react";
import TitlePage from "../../components/ui/TitlePage";
import FormRegisterCompany from "./components/FormRegisterCompany";
import TableListCompnaies from "./components/TableListCompnaies";

function CompaniesOwner() {
  return (
    <div>
      <TitlePage title={"Mis companias"} />
      <Grid spacing={2} container>
        <Grid xs={5} item>
          <FormRegisterCompany />
        </Grid>
        <Grid item xs={7}>
          <TableListCompnaies />
        </Grid>
      </Grid>
    </div>
  );
}

export default CompaniesOwner;
