import React from 'react';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot } from '@mui/x-charts/LineChart';

const FitnessChart = ({ pData, xLabels, color }) => {
  return (
    <div>
      <ChartContainer
        width={550}
        height={300}
        series={[{ type: 'line', data: pData }]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          '.MuiLineElement-root': {
            stroke: color,
            strokeWidth: 2,
          },
        }}
        disableAxisListener
      >
        <LinePlot />
      </ChartContainer>
    </div>
  );
};

export default FitnessChart;