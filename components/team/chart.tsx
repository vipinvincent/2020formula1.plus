import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: [
    'Austria',
    'Styria',
    'Hungary',
    'Britian',
    '70th Anniversary',
    'Spain',
    'Belgium',
    'Italy',
  ],
  datasets: [
    {
      label: ' Mercedes',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#00d2be',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#00d2be',
      pointBackgroundColor: '#00d2be',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#00d2be',
      pointHoverBorderColor: '#00d2be',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [37, 80, 121, 146, 180, 221, 264, 281],
    },
    {
      label: '  Red Bull',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#0600ef',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#0600ef',
      pointBackgroundColor: '#0600ef',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0600ef',
      pointHoverBorderColor: '#0600ef',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 37, 55, 78, 113, 135, 158, 158],
    },
    {
      label: ' McLaren',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#ff8700',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#ff8700',
      pointBackgroundColor: '#ff8700',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ff8700',
      pointHoverBorderColor: '#ff8700',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [26, 39, 41, 51, 53, 62, 68, 98],
    },
    {
      label: ' Racing Point',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#f596c8',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f596c8',
      pointBackgroundColor: '#f596c8',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#f596c8',
      pointHoverBorderColor: '#f596c8',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [8, 22, 40, 42, 41, 63, 66, 82],
    },
    {
      label: ' Ferrari',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#dc0000',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#dc0000',
      pointBackgroundColor: '#dc0000',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#dc0000',
      pointHoverBorderColor: '#dc0000',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [19, 19, 27, 43, 55, 61, 61, 61],
    },
    {
      label: ' Renault',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#fff500',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#fff500',
      pointBackgroundColor: '#fff500',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#fff500',
      pointHoverBorderColor: '#fff500',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [4, 8, 12, 32, 36, 36, 59, 71],
    },
    {
      label: ' AlphaTauri',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#0a2840',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#0a2840',
      pointBackgroundColor: '#0a2840',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0a2840',
      pointHoverBorderColor: '#0a2840',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [6, 7, 7, 13, 14, 16, 20, 47],
    },
    {
      label: ' Alfa Romeo',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#960000',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#960000',
      pointBackgroundColor: '#960000',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#960000',
      pointHoverBorderColor: '#960000',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [2, 2, 2, 2, 2, 2, 2, 2],
    },
    {
      label: ' Haas',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#787878',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#787878',
      pointBackgroundColor: '#787878',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#787878',
      pointHoverBorderColor: '#787878',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 0, 1, 1, 1, 1, 1, 1],
    },
    {
      label: ' Williams',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#0082fa',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#0082fa',
      pointBackgroundColor: '#0082fa',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0082fa',
      pointHoverBorderColor: '#0082fa',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
}

const TeamChart: React.FC = () => {
  return (
    <div className=' hidden md:flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Constructor Standings (2020)
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
        <div className='flex flex-col mx-4 mt-4'>
          <div className='pb-4'>
            <Line data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TeamChart
