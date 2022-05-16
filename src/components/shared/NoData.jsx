import { Box, Typography } from "@mui/material";
import React from "react";

function NoData({ message }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        textAlign: "center",
        marginTop: 10,
      }}
    >
      <Typography>{message}</Typography>
    </Box>
  );
}

export default NoData;
