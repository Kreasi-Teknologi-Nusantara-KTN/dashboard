import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
  const state = {
    labels: ["Negative", "Positive"],
    datasets: [
      {
        label: "Summary",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(34, 124, 112, 1)",
        borderWidth: 2,
        data: [65, 10],
      },
    ],
  };

  return (
    <div>
      <Doughnut
        data={state}
        options={{
          cutout: 70,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default DoughnutChart;
