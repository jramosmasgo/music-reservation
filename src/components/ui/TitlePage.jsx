import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

export const TitleWord = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  position: "relative",
  width: "max-content",
  marginBottom: "25px",

  "::before": {
    content: "''",
    position: "absolute",
    bottom: "-5px",
    left0: 0,
    width: "100%",
    height: "3px",
    background: theme.palette.primary.main,
  },
}));

function TitlePage({ title }) {
  return <TitleWord variant="h5">{title}</TitleWord>;
}

export default TitlePage;
