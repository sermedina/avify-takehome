import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { fetchEnergyData } from '../services/energyGenerationService';
import { EnergyGenerationData } from '../interfaces/energyGenerationData';
import { ChartOptions, ChartSeries } from '../interfaces/chart';

const EnergyChart: React.FC = () => {
  const [data, setData] = useState<EnergyGenerationData>({ from: '', to: '', generationmix: [] });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme==null || storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }


    const loadData = async () => {
      try {
        const result = await fetchEnergyData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  const toggleDarkMode = () => {

    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  // Filter data by types of energy and percentages
  const generations = data?.generationmix?.map(generation => generation.fuel);
  const percents = data?.generationmix?.map(generation => generation.perc);

  const chartTheme = {
    mode: (isDarkMode ? 'dark' : 'light') as 'dark' | 'light',
  };

  const percentLabels = {
    enabled: true,
    formatter: function (val: number) {
      return `${Number(val.toFixed(0))}%`;
    },
  };

  const percentTooltip = {
    y: {
      formatter: function (val: number) {
        return `${val}%`;
      },
    },
  };

  const chartOptionsColumn: ChartOptions = {
    chart: {
      id: 'simple-bar-chart',
    },
    theme: chartTheme,
    xaxis: {
      categories: generations,
    },
    colors: ['#3b82f6'],
    dataLabels: percentLabels,
    tooltip: percentTooltip,
  };

  const chartOptionsBar: ChartOptions = {
    chart: {
      id: 'simple-bar-chart',
      type: 'bar',
      height: '350',
    },
    theme: chartTheme,
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '50%',
      },
    },
    xaxis: {
      categories: generations,
    },
    yaxis: {
      title: {
        text: 'Type of energy',
      },
    },
    colors: ['#4f46e5'],
    dataLabels: percentLabels,
    tooltip: percentTooltip,
  };

  const chartOptionsDonut: ChartOptions = {
    chart: {
      id: 'donut-chart',
    },
    theme: chartTheme,
    colors: ['#f44336', '#2196f3', '#ff9800', '#4caf50', '#9c27b0', '#3f51b5', '#00bcd4', '#8bc34a', '#e91e63', '#9e9e9e'],
    labels: generations,
    dataLabels: percentLabels,
    tooltip: percentTooltip,
  };

  const chartOptionsArea: ChartOptions = {
    chart: {
      id: 'simple-area-chart',
      type: 'area',
    },
    theme: chartTheme,
    xaxis: {
      categories: generations,
    },
    colors: ['#d24e42'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#d24e42'],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.2,
      },
    },
    dataLabels: percentLabels,
    tooltip: percentTooltip,
  };

  const chartSeries: ChartSeries[] = [
    {
      name: 'Percent',
      data: percents,
    },
  ];


  const chartSeriesDonut: number[] = percents;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-blue-600 sm:text-5xl lg:text-6xl mb-4 col-span-full dark:text-white">
        UK Energy Mix
      </h1>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 flex items-center justify-between w-14 h-8 bg-gray-300 rounded-full p-1 transition-colors duration-300 ease-in-out dark:bg-blue-600 z-10"
      >
        <span className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} />
        <span className={`absolute left-2 text-sm text-gray-700 dark:text-gray-200 transition-opacity duration-300 ease-in-out ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>🌞</span>
        <span className={`absolute right-2 text-sm text-gray-700 dark:text-gray-200 transition-opacity duration-300 ease-in-out ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>🌜</span>
      </button>
      <h1 className="text-xl font-semibold text-center text-gray-700 dark:text-gray-300 sm:text-2xl lg:text-3xl mb-8 col-span-full">
        From {data?.from.replace('T', ' ').replace('Z', '')} to {data?.to.replace('T', ' ').replace('Z', '')}
      </h1>

      {/* Column chart */}
      <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4 dark:bg-gray-800">
        <h3 className="text-xl font-semibold dark:text-gray-300 text-center text-blue-500 mb-4">Column Chart</h3>
        <Chart options={chartOptionsColumn} series={chartSeries} type="bar" width="100%" />
      </div>
      {/* Donut chart */}
      <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4 dark:bg-gray-800">
        <h3 className="text-xl font-semibold dark:text-gray-300 text-center text-green-500 mb-4">Donut Chart</h3>
        <Chart options={chartOptionsDonut} series={chartSeriesDonut} type="donut" width="100%" />
      </div>
      {/* Area chart */}
      <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4 dark:bg-gray-800">
        <h3 className="text-xl font-semibold dark:text-gray-300 text-center text-red-500 mb-4">Area Chart</h3>
        <Chart options={chartOptionsArea} series={chartSeries} type="area" width="100%" />
      </div>
      {/* Bar chart */}
      <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4 dark:bg-gray-800">
        <h3 className="text-xl font-semibold dark:text-gray-300 text-center text-purple-500 mb-4">Bar Chart</h3>
        <Chart options={chartOptionsBar} series={chartSeries} type="bar" width="100%" />
      </div>
    </div>
  );
};

export default EnergyChart;
