import React, {Component} from "react";
//import { render } from "react-dom";
import { Chart } from "react-google-charts";
 
class Googlecharts extends Component {
  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          width={'1200px'}
          height={'300px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Total Devices', 'Active Devices', 'Inactive Devices'],
            ['500', 380, 120]
          ]}
          options={{
            title: 'Devices Status',
            chartArea: { width: '50%' },
            isStacked: true,
            hAxis: {
              title: 'Active/Inactive Devices',
              minValue: 0,
            },
            vAxis: {
              title: 'Total Devices',
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
    );
  }
}

export default Googlecharts;