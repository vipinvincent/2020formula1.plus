import React from 'react'

const Race: React.FC = () => {
  return (
    <div className='flex flex-col mb-9 flex-grow flex-no-wrap flex-shrink-0'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        2020 HUNGARIAN GRAND PRIX - Race Results
      </div>
      <div className='w-full grid sm:flex sm:flex-col justify-around py-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow-xs mb-4'>
        <div className='align-middle min-w-full overflow-x-auto rounded-tl-xxl rounded-br-xl'>
          <table className='w-full table'>
            <thead>
              <tr className='bg-white-100'>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Pos
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Driver
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-no-wrap'>
                  Time
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-no-wrap'>
                  Laps
                </th>
                <th className='pr-4 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Pit
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-left'>
                  1
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Lewis Hamilton <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  1:36:12.473
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  70
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  3
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  2
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Max Verstappen <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +8.702s
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  70
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  3
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Valtteri Bottas <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +9.452s
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  70
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  3
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  4
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                      Lance Stroll <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +57.579s
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  70
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  3
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  5
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Alexander Albon <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +78.316s
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  70
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='px-4 py-3 whitespace-no-wrap text-left border-b border-gray-200 table-cell'>
                  6
                </td>
                <td className='px-4 py-3 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 ferrari'>
                      Sebastian Vettel <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center border-b border-gray-200'>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center border-b border-gray-200'>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold border-b border-gray-200'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  7
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                      Sergio Perez <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  8
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Daniel Ricciardo{' '}
                      <span className='text  three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  9
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 haas'>
                      Kevin Magnussen <span className='text'>(Haas)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  10
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                      Carlos Sainz <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  11
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 ferrari'>
                      Charles Leclerc <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  12
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                      Daniil Kvyat <span className='text'>(AlphaTauri)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  12
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                      Lando Norris <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  13
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Esteban Ocon{' '}
                      <span className='text  three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  15
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 haas'>
                      Romain Grosjean <span className='text'>(Haas)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  16
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alfaromeo'>
                      Kimi Räikkönen <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  17
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alfaromeo'>
                      Antonio Giovinazzi{' '}
                      <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  3
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  18
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 williams'>
                      George Russell <span className='text'>(Williams)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  +1 lap
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  69
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  3
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  19
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 williams'>
                      Nicholas Latifi <span className='text'>(Williams)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center '>
                  +5 laps
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-center'>
                  65
                </td>
                <td className='pr-6 whitespace-no-wrap border-b border-gray-200 table-cell text-right font-semibold'>
                  5
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 rounded-br-xxl'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  DNF
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                      Pierre Gasly <span className='text'>(AlphaTauri)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap  table-cell text-center'>
                  DNF
                </td>
                <td className='p-4 whitespace-no-wrap  text-sm leading-5 font-medium text-gray-900 text-center '>
                  3
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold rounded-br-xxl'>
                  2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Race
