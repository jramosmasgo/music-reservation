import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

function CardSkeletonMusicRoomOwner() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6} width="100%">
        <Box display="flex">
          <Skeleton variant="rectangular" width={210} height={218} />
          <Box
            display="flex"
            flexDirection="column"
            padding={2}
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Skeleton variant="text" width={270} />
            <Skeleton variant="rectangular" width={120} height={20} />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} width="100%">
        <Box display="flex">
          <Skeleton variant="rectangular" width={210} height={218} />
          <Box
            display="flex"
            flexDirection="column"
            padding={2}
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Skeleton variant="text" width={270} />
            <Skeleton variant="rectangular" width={120} height={20} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CardSkeletonMusicRoomOwner;
