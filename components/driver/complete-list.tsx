import React from 'react'
import ContentLink from 'components/link/ContentLink'

const CompleteList: React.FC = () => {
  return (
    <div className='flex flex-col mb-4 flex-grow flex-no-wrap flex-shrink-0'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Driver Standings (2019)
      </div>
      <div className='w-full grid sm:flex sm:flex-col justify-around py-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow-xs'>
        <div className='align-middle min-w-full overflow-x-auto rounded-tl-xxl rounded-br-xl'>
          <table className='w-full table rounded-tl-xxl rounded-br-xl'>
            <thead>
              <tr className='bg-white-100'>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Pos
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Driver
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell whitespace-no-wrap'>
                  Nationality
                </th>
                <th className='pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Points 2020 (2019)
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
                    <div className='text-base leading-5 font-medium text-gray-900 mercedes'>
                      Lewis Hamilton <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center  hidden sm:table-cell'>
                  GBR
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right mercedes'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    63 ( 413 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  2
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 mercedes'>
                      Valtteri Bottas <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FIN
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right mercedes'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    58 ( 326 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  3
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 redbull'>
                      Max Verstappen <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  NED
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right redbull'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    33 ( 278 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  4
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 mclaren'>
                      Lando Norris <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  GBR
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right mclaren'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    26 ( 49 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  5
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 redbull'>
                      Alexander Albon <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  THA
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right redbull'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    22 ( 92 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  6
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 racingpoint'>
                      Sergio Perez <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  MEX
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right racingpoint'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    22 ( 52 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  7
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 ferrari'>
                      Charles Leclerc <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  MON
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right ferrari'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    18 ( 264 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  8
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 racingpoint'>
                      Lance Stroll <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  CAN
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right racingpoint'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    18 ( 21 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  9
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 mclaren'>
                      Carlos Sainz <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  ESP
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right mclaren'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    15 ( 96 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  10
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 ferrari'>
                      Sebastian Vettel <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  GER
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right ferrari'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    9 ( 240 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  11
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 renault'>
                      Daniel Ricciardo{' '}
                      <span className='text three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  AUS
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right renault'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text three-d-text'>
                    {' '}
                    8 ( 54 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  12
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 alphatauri'>
                      Pierre Gasly <span className='text'>(Toro Rosso)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FRA
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right alphatauri'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    6 ( 95 )
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  13
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 renault'>
                      Esteban Ocon{' '}
                      <span className='text  three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FRA
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right renault'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text  three-d-text'>
                    {' '}
                    4 ( 0 )
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  14
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 alfaromeo'>
                      Antonio Giovinazzi{' '}
                      <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  ITA
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right alfaromeo'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    2 ( 14 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  15
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 alphatauri'>
                      Daniil Kvyat <span className='text'>(Toro Rosso)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  RUS
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right alphatauri'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    1 ( 37 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  16
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 haas'>
                      Kevin Magnussen <span className='text'>(Haas)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  DEN
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right haas'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    1 ( 20 )
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  17
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 alfaromeo'>
                      Kimi Räikkönen <span className='text'>(Alfa Romeo)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FIN
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right alfaromeo'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    0 ( 43 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  18
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 williams'>
                      Nicholas Latifi <span className='text'>(Williams)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  CAN
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right williams'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    0 ( 0 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  19
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 haas'>
                      Romain Grosjean <span className='text'>(Haas)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FRA
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right haas'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    0 ( 8 )
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  20
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-base leading-5 font-medium text-gray-900 williams'>
                      George Russell <span className='text'>(Williams)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  GBR
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right williams'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text'>
                    {' '}
                    0 ( 0 )
                  </span>
                </td>
              </tr>
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
