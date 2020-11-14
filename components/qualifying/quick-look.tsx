import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Qualifying: React.FC = () => {
  return (
    <div className='flex flex-col mb-0 flex-grow flex-no-wrap flex-shrink-0'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Turkish GP 2020 - Qualifying Results
      </div>
      <div className='w-full grid sm:flex sm:flex-col justify-around py-2 bg-white-100 rounded-md mb-4'>
        <div className='align-middle min-w-full overflow-x-auto'>
          <table className='w-full table rounded-t-md rounded-b-md'>
            <thead>
              <tr className='bg-white-100 rounded-t-md  '>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap rounded-t-md  '>
                  Pos
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Driver
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-no-wrap'>
                  Lap time
                </th>
                <th className='pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Tyre
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  1
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                      Lance Stroll <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1m 47.765s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-green-600'>
                    &nbsp;I
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-left'>
                  2
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Max Verstappen <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +0.290s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-green-600'>
                    &nbsp;I
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  3
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                      Sergio Perez <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  +1.556s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-green-600'>
                    &nbsp;I
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  4
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Alexander Albon <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  +2.683s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right alphatauri'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-green-600'>
                    &nbsp;I
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  5
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Daniel Ricciardo{' '}
                      <span className='text three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  +3.830s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right mclaren'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  6
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Lewis Hamilton <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  +4.795s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-green-600'>
                    &nbsp;I
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  7
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Esteban Ocon{' '}
                      <span className='text three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  +4.857s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right mclaren'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  8
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alfaromeo'>
                      Kimi Räikkönen <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  +4.980s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right alphatauri'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  9
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Valtteri Bottas<span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  +5.493s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right redbull'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-green-600'>
                    &nbsp;I
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  10
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alfaromeo'>
                      Antonio Giovinazzi{' '}
                      <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  +9.461s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right redbull'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-green-600'>
                    &nbsp;I
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
          <ContentLink href='/qualifying-results' target='_self'>
            View Full Qualifying Results...
          </ContentLink>
        </p>
      </div>
    </div>
  )
}
export default Qualifying
