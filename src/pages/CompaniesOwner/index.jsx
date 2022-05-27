import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCompanies } from "../../api/company/companyService";
import NoData from "../../components/shared/NoData";
import TitlePage from "../../components/ui/TitlePage";
import CardCompany from "./components/CardCompany";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import CardCompanySkeleton from "../../components/skeletons/CardCompanySkeleton";

function CompaniesOwner() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCompanies = async () => {
    setLoading(true);
    const result = await getCompanies();
    setCompanies(result.data);
    setLoading(false);
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
      ) : !loading ? (
        <NoData message="No tiene companias registradas" />
      ) : (
        <CardCompanySkeleton />
      )}
    </div>
  );
}

export default CompaniesOwner;
