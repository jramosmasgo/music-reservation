import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCompanies } from "../../../api/company/companyService";
import { StyledTableCell, StyledTableRow } from "../../../styles/shared/table";

function TableListCompnaies() {
  const [companies, setCompanies] = useState([]);

  const listCompanies = async () => {
    const companiesSearch = await getCompanies();
    setCompanies(companiesSearch.data);
  };

  useEffect(() => {
    listCompanies();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Telefono</StyledTableCell>
            <StyledTableCell>Numero Documento</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.phone}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.numberDoc}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableListCompnaies;
