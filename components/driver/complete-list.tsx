import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Driver: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Driver Standings (2019)
      </div>
      <div className='relative bg-white-100 rounded shadow-xs'>
        <div className='flex flex-col max-w-screen-xl mx-auto'>
          <div className='align-middle inline-block w-full overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Position
                  </th>
                  <th className='pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Driver
                  </th>
                  <th className='pl-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Nationality
                  </th>
                  <th className='pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Standings
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    1
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                        Lewis Hamilton <span className='text'>(Mercedes)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    GBR
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mercedes'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      413
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    2
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                        Valtteri Bottas <span className='text'>(Mercedes)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    FIN
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mercedes'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      326
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    3
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                        Max Verstappen <span className='text'>(Red Bull)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    NED
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right redbull'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      278
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    4
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 ferrari'>
                        Charles Leclerc <span className='text'>(Ferrari)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    MON
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right ferrari'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      264
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    5
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 ferrari'>
                        Sebastian Vettel <span className='text'>(Ferrari)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    GER
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right ferrari'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      240
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    6
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                        Carlos Sainz <span className='text'>(McLaren)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    ESP
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mclaren'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      96
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    7
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                        Pierre Gasly <span className='text'>(Toro Rosso)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    FRA
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right alphatauri'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      95
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    8
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                        Alexander Albon <span className='text'>(Red Bull)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    THA
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right redbull'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      92
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    9
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                        Daniel Ricciardo{' '}
                        <span className='text three-d-text'>(Renault)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    AUS
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right renault'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text three-d-text'>
                      54
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    10
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                        Sergio Perez{' '}
                        <span className='text'>(Racing Point)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    MEX
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right racingpoint'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      52
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    11
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                        Lando Norris <span className='text'>(McLaren)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    GBR
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mclaren'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      49
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    12
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 alfaromeo'>
                        Kimi Räikkönen{' '}
                        <span className='text'>(Alfa Romeo)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    FIN
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right alfaromeo'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      43
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    13
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                        Daniil Kvyat <span className='text'>(Toro Rosso)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    RUS
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right alphatauri'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      37
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    14
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                        Nico Hulkenberg{' '}
                        <span className='text  three-d-text'>(Renault)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    GER
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right renault'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text  three-d-text'>
                      37
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    15
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                        Lance Stroll{' '}
                        <span className='text'>(Racing Point)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    CAN
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right racingpoint'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      21
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    16
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 haas'>
                        Kevin Magnussen <span className='text'>(Haas)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    DEN
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right haas'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      20
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    17
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 alfaromeo'>
                        Antonio Giovinazzi{' '}
                        <span className='text'>(Alfa Romeo)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    ITA
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right alfaromeo'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      14
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    18
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 haas'>
                        Romain Grosjean <span className='text'>(Haas)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    FRA
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right haas'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      8
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left'>
                    19
                  </td>
                  <td className='py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 williams'>
                        Robert Kubica <span className='text'>(Williams)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                    POL
                  </td>
                  <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right williams'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      1
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='pl-6 py-4 whitespace-no-wrap text-left'>20</td>
                  <td className='px-6 py-4 whitespace-no-wrap'>
                    <div className='flex items-center'>
                      <div className='text-sm leading-5 font-medium text-gray-900 williams'>
                        George Russell <span className='text'>(Williams)</span>
                      </div>
                    </div>
                  </td>
                  <td className='pl-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center'>
                    GBR
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap text-right williams'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                      0
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
export default Driver
