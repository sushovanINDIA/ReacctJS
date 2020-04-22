import React, {Component} from "react";
//import { render } from "react-dom";
import { Chart } from "react-google-charts";
 
class Charts extends Component {
  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Hospitals', 'Active Devices', 'Inactive Devices'],
            ['R.N Tagore', 1200, 300],
            ['Apollo NursingHome', 1420, 80],
            ['Desun NursingHome', 700, 610],
            ['B.M Birla Heart Research', 2000, 25],
            ['Kothari', 2000, 200],
          ]}
          options={{
            title: "Data Visualizations Of device status Of different Hospitals",
            chartArea: { width: '50%' },
            colors: ['#ff0000', '#00ffff'],
            hAxis: {
              title: 'Active/Inactive Devices',
              minValue: 0,
            },
            vAxis: {
              title: 'Hospitals',
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '4' }}
        />
      </div>
    );
  }
}

export default Charts;