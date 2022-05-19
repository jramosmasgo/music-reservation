import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCompanies } from "../../api/company/companyService";
import TitlePage from "../../components/ui/TitlePage";
import CardCompany from "./components/CardCompany";

function CompaniesOwner() {
  const [companies, setCompanies] = useState([]);

  const getAllCompanies = async () => {
    const result = await getCompanies();
    console.log(result);
    setCompanies(result.data);
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div>
      <TitlePage title={"Mis companias"} />
      <Grid spacing={3} container>
        {companies.map((item) => (
          <Grid item key={item.id} xs={6}>
            <CardCompany company={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CompaniesOwner;
