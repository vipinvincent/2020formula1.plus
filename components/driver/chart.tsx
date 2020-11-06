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
    'Tuscan',
    'Russian',
    'Eifel',
    'Portugal',
    'Imola',
  ],
  datasets: [
    {
      label: ' Lewis Hamilton',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#00d2be',
      pointHoverBorderColor: '#00d2be',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [12, 37, 63, 88, 107, 132, 157, 164, 190, 205, 230, 256, 282],
    },
    {
      label: ' Valtteri Bottas',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#00d2be',
      pointHoverBorderColor: '#00d2be',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [25, 43, 58, 58, 73, 89, 107, 117, 135, 161, 161, 179, 197],
    },
    {
      label: '  Max Verstappen',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#0600ef',
      pointHoverBorderColor: '#0600ef',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 15, 33, 52, 77, 95, 110, 110, 110, 128, 147, 162, 162],
    },
    {
      label: '  Alex Albon',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#0600ef',
      pointHoverBorderColor: '#0600ef',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 12, 22, 26, 36, 40, 48, 48, 63, 64, 64, 64, 64],
    },
    {
      label: ' Lando Norris',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#ff8700',
      pointHoverBorderColor: '#ff8700',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [16, 26, 26, 36, 38, 39, 45, 57, 65, 65, 65, 65, 69],
    },
    {
      label: ' Carlos Sainz Jr.',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#ff8700',
      pointHoverBorderColor: '#ff8700',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [10, 13, 15, 15, 15, 23, 23, 41, 41, 41, 51, 59, 65],
    },
    {
      label: ' Sergio Perez',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#f596c8',
      pointHoverBorderColor: '#f596c8',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [8, 16, 22, 22, 22, 32, 33, 34, 44, 56, 68, 74, 82],
    },
    {
      label: ' Lance Stroll',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#f596c8',
      pointHoverBorderColor: '#f596c8',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 6, 18, 20, 28, 40, 42, 57, 57, 57, 57, 57, 57],
    },
    {
      label: ' Nico Hulkenberg',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#f596c8',
      pointHoverBorderColor: '#f596c8',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 10, 10, 10],
    },
    {
      label: ' Charles Leclerc',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#dc0000',
      pointHoverBorderColor: '#dc0000',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [18, 18, 18, 33, 45, 45, 45, 45, 49, 57, 63, 75, 85],
    },
    {
      label: ' Sebastian Vettel',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#dc0000',
      pointHoverBorderColor: '#dc0000',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [1, 1, 9, 10, 10, 16, 16, 16, 17, 17, 17, 18, 18],
    },
    {
      label: ' Daniel Ricciardo',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#fff500',
      pointHoverBorderColor: '#fff500',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 4, 8, 20, 20, 20, 33, 41, 53, 63, 78, 80, 95],
    },
    {
      label: ' Esteban Ocon',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#fff500',
      pointHoverBorderColor: '#fff500',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [4, 4, 4, 12, 16, 16, 26, 30, 30, 36, 36, 40, 40],
    },
    {
      label: ' Pierre Gasly',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#0a2840',
      pointHoverBorderColor: '#0a2840',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [6, 6, 6, 12, 12, 14, 18, 43, 43, 45, 53, 63, 63],
    },
    {
      label: ' Daniil Kvyat',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#0a2840',
      pointHoverBorderColor: '#0a2840',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 1, 1, 1, 2, 2, 2, 4, 10, 14, 14, 14, 26],
    },
    {
      label: ' Antonio Giovinazzi',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#960000',
      pointHoverBorderColor: '#960000',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4],
    },
    {
      label: ' Kimi Räikkönen',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#960000',
      pointHoverBorderColor: '#960000',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4],
    },
    {
      label: ' Kevin Magnussen',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#787878',
      pointHoverBorderColor: '#787878',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
      label: ' Romain Grosjean',
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
      pointBorderWidth: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#787878',
      pointHoverBorderColor: '#787878',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
    },
    // {
    //   label: ' George Russell',
    //   fill: false,
    //   lineTension: 0.1,
    //   backgroundColor: 'white',
    //   borderColor: '#0082fa',
    //   borderCapStyle: 'round',
    //   borderDash: [1],
    //   borderDashOffset: 0.0,
    //   borderJoinStyle: 'round',
    //   pointBorderColor: '#0082fa',
    //   pointBackgroundColor: '#0082fa',
    //   pointBorderWidth: 5,
    //   pointHoverRadius: 7,
    //   pointHoverBackgroundColor: '#0082fa',
    //   pointHoverBorderColor: '#0082fa',
    //   pointHoverBorderWidth: 2,
    //   pointRadius: 3,
    //   pointHitRadius: 10,
    //   data: [0, 0, 0, 0]
    // },
    // {
    //   label: ' Nicholas Latifi',
    //   fill: false,
    //   lineTension: 0.1,
    //   backgroundColor: 'white',
    //   borderColor: '#0082fa',
    //   borderCapStyle: 'round',
    //   borderDash: [1],
    //   borderDashOffset: 0.0,
    //   borderJoinStyle: 'round',
    //   pointBorderColor: '#0082fa',
    //   pointBackgroundColor: '#0082fa',
    //   pointBorderWidth: 5,
    //   pointHoverRadius: 7,
    //   pointHoverBackgroundColor: '#0082fa',
    //   pointHoverBorderColor: '#0082fa',
    //   pointHoverBorderWidth: 2,
    //   pointRadius: 3,
    //   pointHitRadius: 10,
    //   data: [0, 0, 0, 0]
    // },
  ],
}

const DriverChart: React.FC = () => {
  return (
    <div className=' hidden md:flex flex-col mb-4'>
      <div className='relative bg-white-100 rounded-md'>
        <div className='flex flex-col mx-4 mt-4'>
          <div className='pb-4'>
            <Line data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default DriverChart
