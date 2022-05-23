import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCompanies } from "../../api/company/companyService";
import NoData from "../../components/shared/NoData";
import TitlePage from "../../components/ui/TitlePage";
import CardCompany from "./components/CardCompany";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";

function CompaniesOwner() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  const getAllCompanies = async () => {
    const result = await getCompanies();
    setCompanies(result.data);
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <TitlePage title={"Mis companias"} />
        <Button
          onClick={() => navigate("/create-company")}
          startIcon={<AddCircleOutlineIcon />}
          variant="contained"
          size="small"
          sx={{ height: 35 }}
        >
          Agregar Nuevo
        </Button>
      </Box>
      {companies.length > 0 ? (
        <Grid spacing={3} container>
          {companies.map((item) => (
            <Grid item key={item.id} xs={6}>
              <CardCompany company={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoData message="No tiene companias registradas" />
      )}
    </div>
  );
}

export default CompaniesOwner;
