import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const darkOptions: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  responsive: true,
  elements: {
    line: {
      fill: 'start',
    },
  },
  color: '#ffffff',
  scales: {
    y: {
      ticks: {
        color: '#ffffff',
      },
      display: true,
      grid: {
        color: '#373737',
      },
    },
    x: {
      ticks: {
        color: '#ffffff',
      },
      display: true,
      grid: {
        color: '#373737',
      },
    },
  },
  hover: {
    mode: 'point',
    intersect: true,
  },
  plugins: {
    tooltip: {
      mode: 'index',
      intersect: true,
    },
    legend: {
      labels: {
        color: '#ffffff',
      },
      align: 'end',
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
      color: '#ffffff',
    },
  },
};

const lightOptions: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  responsive: true,
  color: '#000000',

  scales: {
    y: {
      ticks: {
        color: '#000000',
      },
      display: true,
      grid: {
        color: '#d1d5db',
      },
    },
    x: {
      ticks: {
        color: '#000000',
      },
      display: true,
      grid: {
        color: '#d1d5db',
      },
    },
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  plugins: {
    tooltip: {
      mode: 'index',
      intersect: true,
    },
    legend: {
      labels: {
        color: '#000000',
      },
      align: 'end',
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
      color: '#000000',
    },
  },
};

const data: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'First dataset',
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.4,
    },
    {
      label: 'Second dataset',
      data: [33, 25, 35, 51, 54, 76],
      fill: true,
      backgroundColor: 'rgba(139,92,246,0.5)',
      borderColor: 'rgba(139,92,246,1)',
      tension: 0.4,
    },
  ],
};

export default function Chart() {
  return (
    <>
      <div className='rounded border border-gray-300 dark:border-gray-600 p-5'>
        <div className='mb-5'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full max-w-full flex-grow flex-1'>
              <h6 className='text-black dark:text-white uppercase mb-2 text-xs font-semibold'>
                Overview
              </h6>
              <h2 className='text-black dark:text-white text-xl font-semibold'>
                Projects history
              </h2>
            </div>
          </div>
        </div>
        <div className='relative hidden dark:block h-[475px]'>
          <Line data={data} options={darkOptions} />
        </div>
        <div className='relative dark:hidden block h-[475px]'>
          <Line data={data} options={lightOptions} />
        </div>
      </div>
    </>
  );
}
