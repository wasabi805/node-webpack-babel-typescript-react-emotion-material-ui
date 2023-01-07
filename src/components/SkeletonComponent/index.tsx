import React from "react";
import { Box, Typography, Skeleton, Grid, List, ListItem } from "@mui/material";
import LoadingText from "../LodingText";

const rows = 5;

const createRows = ({ comp, qty }: any) => {
  let rows: any[] = [];

  for (let index = 0; index < qty; index++) {
    rows = [...rows, comp()];
  }
  return rows;
};

const SkeletonTableRow = ({}) => {
  return (
    <ListItem>
      <Skeleton sx={{ width: 300 }} />
    </ListItem>
  );
};

const SkeletonComponent = () => {
  return (
    <Box sx={{position: 'relative'}} >

      <LoadingText sx={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        background: '#6fcbcb29',
        borderRadius: '5px',


        }} />

      <Grid container id="skeleton-form-container">
        <Grid item xs={12} id="skelteon-header">
          <Typography variant="h1">{<Skeleton />}</Typography>
        </Grid>

        <Grid item xs={2} id={""} sx={{ flex: 1 }}>
          {createRows({ comp: SkeletonTableRow, qty: 6 })}
        </Grid>

        <Grid item xs={2} id={""}>
          {createRows({ comp: SkeletonTableRow, qty: 6 })}
        </Grid>

        <Grid item xs={2} id={""}>
          {createRows({ comp: SkeletonTableRow, qty: 6 })}
        </Grid>

        <Grid item xs={2} id={""}>
          {createRows({ comp: SkeletonTableRow, qty: 6 })}
        </Grid>

        <Grid item xs={2} id={""}>
          {createRows({ comp: SkeletonTableRow, qty: 6 })}
        </Grid>

        <Grid item xs={2} id={""}>
          {createRows({ comp: SkeletonTableRow, qty: 6 })}
        </Grid>

        <Grid item xs={12} id="skelteon-footer">
          <Typography variant="h1">{<Skeleton />}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkeletonComponent;
