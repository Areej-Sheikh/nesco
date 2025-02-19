import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart({ GraphData }) {
  const { stockPrices, volumes, labels } = GraphData;

  const lineData = {
    labels,
    datasets: [
      {
        label: "RIL - Value",
        data: stockPrices,
        borderColor: "blue",
        backgroundColor: "transparent",
        pointRadius: 2,
        pointHoverRadius: 4,
      },
    ],
  };

  const barData = {
    labels,
    datasets: [
      {
        label: "Volume",
        data: volumes,
        backgroundColor: "blue",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
  };
  const data = {
    labels: [
      "09:24",
      "09:34",
      "09:44",
      "09:54",
      "10:04",
      "10:14",
      "10:24",
      "10:34",
      "10:44",
    ],
    datasets: [
      {
        label: "U5KZ4", // Label for the dataset
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90], // Replace with your actual data
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color
        fill: "origin", // Fill from the origin (y = 0)
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      title: {
        display: true,
        text: "U5KZ4 Area Chart", // Chart title
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time", // X-axis label
        },
      },
      y: {
        beginAtZero: true, // Start Y-axis from 0
        title: {
          display: true,
          text: "Value", // Y-axis label
        },
      },
    },
  };

  return (
    <div className="pb-10 bg-white shadow-md rounded-lg  flex flex-col justify-center">
      {/* Navigation Tabs */}

      {/* Line Chart */}
      <div className="mb-6  w-full">
        <p className=" text-2xl">03/02/2025</p>
        <p className="ml-20 my-2 text-2xl">RIL - Value</p>
        <Line
          data={lineData}
          options={options}
          className="flex w-full h-full"
        />
      </div>

      {/* Bar Chart */}
      <div className="md:mt-20  w-full ">
        <p className="ml-20 text-2xl text-primary">Volume</p>
        <Bar data={barData} options={options} />
      </div>

      <div className="md:mt-20  w-full ">
        {/* <p className="ml-20 text-2xl text-primary">Volume</p> */}
        <Line data={data} options={options1} />
      </div>
    </div>
  );
}
