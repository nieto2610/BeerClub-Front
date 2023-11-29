import { Box, Typography } from '@mui/material';
import React from 'react';
import "./ChartTotalSubscriptions.scss";

const ChartTotalSubscriptors = ({total}) => {
   
  return (
    <>
     {total !== undefined ? (
        <Box className="chartContainerTotal">
          <Typography className="titleTotal">TOTAL DE USUARIOS ACTIVOS</Typography>
          <Typography className="textTotal">{total.length}</Typography>
        </Box>
      ) : <></> }
    </>
  )
};

export default ChartTotalSubscriptors;
