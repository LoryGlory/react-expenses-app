// chart component wrapper for all individual chart bars
import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
  // creating new array with $ values of all data points
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

  // calculate maximum $ value of all data points (expenses)
  const totalMaximum = Math.max(...dataPointValues);

  return (
      <div className="chart">
        {/*create as many chart bars needed according to data points, plotting value in relation to maximum value in entire chart*/}
        {props.dataPoints.map((dataPoint => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        )))}
      </div>
  );
}

export default Chart;