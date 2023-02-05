// individual chart bars for each month
import React from "react";

import './ChartBar.css'

const ChartBar = props => {
  // default value, chart bar is empty
  let barFillHeight = '0%';

  // fill chart bar according to maximum $ value of props (expense entries)
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{height: barFillHeight}}>
          </div>
        </div>
        <div className="chart-bar__label">
          {props.label}
        </div>
      </div>
  );
}

export default ChartBar;
