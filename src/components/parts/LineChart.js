import React from 'react';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';



function LineChart() {
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(34, 124, 112, 1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          }
        ]
      }
      
    return <div>
    <Line 
      data={state}
      options={{
        title:{
          display:true,
          text:'Average Rainfall per month',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />
  </div>
  }
  
  export default LineChart;
  