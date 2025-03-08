"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function ProgressGraph() {
  const controls = useAnimation();
  const graphRef = useRef(null);

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Skin Health Score",
        data: [65, 75, 82, 90],
        fill: false,
        borderColor: "rgb(192, 132, 252)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  useEffect(() => {
    controls.start({
      x: [0, 100, 200, 300],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      },
    });
  }, [controls]);

  return (
    <div className="relative max-w-4xl mx-auto p-6">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-medium">Skin Appearance</h3>
        <div className="flex gap-4">
          <button className="px-4 py-1 rounded-full bg-gray-100">Weekly</button>
          <button className="px-4 py-1 rounded-full bg-lime-200">
            Monthly
          </button>
        </div>
      </div>
      <div className="relative" ref={graphRef}>
        <Line data={data} options={options} />
        <motion.div
          className="absolute w-4 h-4 bg-purple-400 rounded-full"
          animate={controls}
          style={{
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  );
}
