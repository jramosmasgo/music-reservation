import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCollaborator } from "../../../api/collaborator/collaboratorService";
import { ModalBox } from "../../../styles/shared/modal";
import { StyledTableCell, StyledTableRow } from "../../../styles/shared/table";
import AddCollaborator from "./AddCollaborator";

function TableListCollaborators({ idCompany }) {
  const [collaborators, setCollaborators] = useState([]);
  const [open, setOpen] = useState(false);
  const stateAuth = useSelector((state) => state.auth);

  const getAllCollborators = async () => {
    const result = await getCollaborator(idCompany);
    setCollaborators(result.data);
  };

  const closeModal = () => {
    setOpen(false);
    getAllCollborators();
  };

  useEffect(() => {
    getAllCollborators();
  }, [idCompany]);

  return (
    <>
      <Modal open={open}>
        <ModalBox ancho={450}>
          <AddCollaborator idCompany={idCompany} close={closeModal} />
        </ModalBox>
      </Modal>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Telefono</StyledTableCell>
                  <StyledTableCell>Options</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {collaborators.map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.User.fullname}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.User.email}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.User.phone ?? "No registrado"}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.User.email !== stateAuth.email ? (
                        <Button>Desabilitar</Button>
                      ) : (
                        "Propietario"
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Agregar Coloborador
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default TableListCollaborators;
