import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Qualifying: React.FC = () => {
  return (
    <div className='flex flex-col mb-9 flex-grow flex-no-wrap flex-shrink-0'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Belgian GP 2020 - Qualifying Results
      </div>
      <div className='w-full grid sm:flex sm:flex-col justify-around py-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow-xs mb-4'>
        <div className='align-middle min-w-full overflow-x-auto'>
          <table className='w-full table rounded-tl-xxl rounded-br-xl'>
            <thead>
              <tr className='bg-white-100 rounded-tl-xxl'>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap rounded-tl-xxl'>
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
            <tbody className='bg-white rounded-br-xxl'>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-left'>
                  1
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Lewis Hamilton <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  1:41.252 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  2
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Valtteri Bottas <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:41.763 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right '>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  3
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Max Verstappen <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:41.778 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  4
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
                  1:42.061 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right mclaren'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  5
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Alexander Albon <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:42.264 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  6
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
                  1:42.396 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right mclaren'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  7
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                      Carlos Sainz <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:42.438 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right redbull'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  8
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                      Sergio Perez <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:42.532 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right racingpoint'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  9
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                      Lance Stroll <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:42.603 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right racingpoint'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  10
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                      Lando Norris <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:42.657 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right redbull'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  11
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                      Daniil Kvyat <span className='text'>(AlphaTauri)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:42.730 (Q2)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right alphatauri'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  12
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                      Pierre Gasly <span className='text'>(AlphaTauri)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:42.745 (Q2)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right alphatauri'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  13
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 ferrari'>
                      Charles Leclerc <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:42.996 (Q2)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right mclaren'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  14
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 ferrari'>
                      Sebastian Vettel <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:43.261 (Q2)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right mclaren'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  15
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 williams'>
                      George Russell <span className='text'>(Williams)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:43.468 (Q2)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  16
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alfaromeo'>
                      Kimi Räikkönen <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center '>
                  1:43.743 (Q1)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  17
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 haas'>
                      Romain Grosjean <span className='text'>(Haas)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:43.838 (Q1)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  18
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alfaromeo'>
                      Antonio Giovinazzi{' '}
                      <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center '>
                  1:43.950 (Q1)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  19
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 williams'>
                      Nicholas Latifi <span className='text'>(Williams)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:44.138 (Q1)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  20
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 haas'>
                      Kevin Magnussen <span className='text'>(Haas)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:44.314(Q1)
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-right'>
                  <span className='pl-3 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-red-600'>
                    S
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='my-2 pr-4 text-base leading-normal text-gray-660 text-right'>
          <ContentLink href='/race-results' target='_self'>
            View Race Results...
          </ContentLink>
        </p>
      </div>
    </div>
  )
}
export default Qualifying
