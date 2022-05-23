import { Box, Typography } from "@mui/material";
import React from "react";

function NoData({ message, height = "50vh" }) {
  return (
    <Box
      sx={{
        width: "100%",
        height,
        textAlign: "center",
        marginTop: 10,
      }}
    >
      <Typography>{message}</Typography>
    </Box>
  );
}

export default NoData;
