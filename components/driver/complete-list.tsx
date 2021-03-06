import React from 'react'
import ContentLink from 'components/link/ContentLink'

const CompleteList: React.FC = () => {
  return (
    <div className='flex flex-col mb-4 flex-grow flex-nowrap flex-shrink-0'>
      {/* <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Full List 2020 (2019)
      </div> */}
      <div className='w-full grid sm:flex sm:flex-col justify-around py-2 bg-white-100 rounded-md -xs'>
        <div className='align-middle min-w-full overflow-x-auto rounded-t-md  '>
          <table className='w-full table rounded-t-md  '>
            <thead>
              <tr className='bg-white-100'>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-nowrap'>
                  Pos
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-nowrap'>
                  Driver
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell whitespace-nowrap'>
                  Nationality
                </th>
                <th className='pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-nowrap'>
                  Points 2020 (2019)
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-left'>
                  1
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 mercedes'>
                      Lewis Hamilton <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center  hidden sm:table-cell'>
                  GBR
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right mercedes'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    347 ( 413 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  2
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 mercedes'>
                      Valtteri Bottas <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FIN
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right mercedes'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    223 ( 326 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  3
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 redbull'>
                      Max Verstappen <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  NED
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right redbull'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    214 ( 278 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  4
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 racingpoint'>
                      Sergio Perez <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  MEX
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right racingpoint'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    125 ( 52 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  5
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 renault'>
                      Daniel Ricciardo{' '}
                      <span className='text three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  AUS
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right renault'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text three-d-text'>
                    {' '}
                    119 ( 54 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  6
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 mclaren'>
                      Carlos Sainz <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  ESP
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right mclaren'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    105 ( 96 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  7
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 redbull'>
                      Alexander Albon <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  THA
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right redbull'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    105 ( 92 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  8
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 ferrari'>
                      Charles Leclerc <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  MON
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right ferrari'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    98 ( 264 )
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  9
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 mclaren'>
                      Lando Norris <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  GBR
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right mclaren'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    97 ( 49 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  10
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 alphatauri'>
                      Pierre Gasly <span className='text'>(Toro Rosso)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FRA
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right alphatauri'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    75 ( 95 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  11
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 racingpoint'>
                      Lance Stroll <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  CAN
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right racingpoint'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    75 ( 21 )
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  12
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 renault'>
                      Esteban Ocon{' '}
                      <span className='text  three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FRA
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right renault'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text  three-d-text'>
                    {' '}
                    62 ( 0 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  13
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 ferrari'>
                      Sebastian Vettel <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  GER
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right ferrari'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    33 ( 240 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  14
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 alphatauri'>
                      Daniil Kvyat <span className='text'>(Toro Rosso)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  RUS
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right alphatauri'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    32 ( 37 )
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  15
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 racingpoint'>
                      Nico Hulkenberg{' '}
                      <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  GER
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right racingpoint'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    10 ( 37 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  16
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 alfaromeo'>
                      Kimi R??ikk??nen <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FIN
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right alfaromeo'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    4 ( 43 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  17
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 alfaromeo'>
                      Antonio Giovinazzi{' '}
                      <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  ITA
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right alfaromeo'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    4 ( 14 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  18
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 williams'>
                      George Russell <span className='text'>(Williams)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  GBR
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right williams'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    3 ( 0 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  19
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 haas'>
                      Romain Grosjean <span className='text'>(Haas)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FRA
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right haas'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    2 ( 8 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  20
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 haas'>
                      Kevin Magnussen <span className='text'>(Haas)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  DEN
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right haas'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    1 ( 20 )
                  </span>
                </td>
              </tr>
              {/* <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-left table-cell'>
                  20
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 williams'>
                      Nicholas Latifi <span className='text'>(Williams)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  CAN
                </td>
                <td className='p-4 whitespace-nowrap border-b border-gray-200 table-cell text-right williams'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold text'>
                    {' '}
                    0 ( 0 )
                  </span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
          <ContentLink href='/' target='_self'>
            Latest News...
          </ContentLink>
        </p>
      </div>
    </div>
  )
}
export default CompleteList
