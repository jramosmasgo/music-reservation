import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

function CardMusicRoomSkeleton() {
  return (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item sm={4} width="100%">
          <Box display="flex" flexDirection="column">
            <Skeleton
              variant="rectangular"
              sx={{ width: "95%" }}
              height={230}
            />
            <Skeleton variant="text" sx={{ width: "95%" }} />
            <Skeleton sx={{ width: "50%" }} variant="text" />
          </Box>
        </Grid>
        <Grid item sm={4} width="100%">
          <Box display="flex" flexDirection="column">
            <Skeleton
              variant="rectangular"
              sx={{ width: "95%" }}
              height={230}
            />
            <Skeleton variant="text" sx={{ width: "95%" }} />
            <Skeleton sx={{ width: "50%" }} variant="text" />
          </Box>
        </Grid>
        <Grid item sm={4} width="100%">
          <Box display="flex" flexDirection="column">
            <Skeleton
              variant="rectangular"
              sx={{ width: "95%" }}
              height={230}
            />
            <Skeleton variant="text" sx={{ width: "95%" }} />
            <Skeleton sx={{ width: "50%" }} variant="text" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardMusicRoomSkeleton;
