import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

function CardRerservationSkeleton() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={4} width="100%">
        <Box display="flex" height={200} flexDirection="column">
          <Skeleton variant="text" sx={{ width: "100%" }} />
          <Skeleton width={200} variant="text" />
          <Skeleton width={200} variant="text" />
          <Skeleton width={200} variant="text" />
          <Box display="flex" justifyContent="flex-end">
            <Skeleton variant="rectangular" width={100} height={20} />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={4} width="100%">
        <Box display="flex" height={200} flexDirection="column">
          <Skeleton variant="text" sx={{ width: "100%" }} />
          <Skeleton width={200} variant="text" />
          <Skeleton width={200} variant="text" />
          <Skeleton width={200} variant="text" />
          <Box display="flex" justifyContent="flex-end">
            <Skeleton variant="rectangular" width={100} height={20} />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={4} width="100%">
        <Box display="flex" height={200} flexDirection="column">
          <Skeleton variant="text" sx={{ width: "100%" }} />
          <Skeleton width={200} variant="text" />
          <Skeleton width={200} variant="text" />
          <Skeleton width={200} variant="text" />
          <Box display="flex" justifyContent="flex-end">
            <Skeleton variant="rectangular" width={100} height={20} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CardRerservationSkeleton;
