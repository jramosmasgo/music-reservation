import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

function CardCompanySkeleton() {
  return (
    <Grid container>
      <Grid item sm={6} width="100%">
        <Box display="flex">
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box
            display="flex"
            flexDirection="column"
            padding={2}
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Skeleton variant="text" width={320} />
            <Skeleton variant="rectangular" width={120} height={20} />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} width="100%">
        <Box display="flex">
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box
            display="flex"
            flexDirection="column"
            padding={2}
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Skeleton variant="text" width={320} />
            <Skeleton variant="rectangular" width={120} height={20} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CardCompanySkeleton;
