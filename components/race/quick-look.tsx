import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Race: React.FC = () => {
  return (
    <div className='flex flex-col mb-9 flex-grow flex-no-wrap flex-shrink-0'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-3 '>
        Russian GP 2020 - Race Results
      </div>
      <div className='w-full grid sm:flex sm:flex-col justify-around py-3 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow-xs mb-4'>
        <div className='align-middle min-w-full overflow-x-auto '>
          <table className='w-full table'>
            <thead>
              <tr className='bg-white-100 border-b border-gray-200'>
                <th className='p-4 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Pos
                </th>
                <th className='p-4 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Driver
                </th>
                <th className='p-4 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-no-wrap'>
                  Time
                </th>
                <th className='p-4 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-no-wrap'>
                  Laps
                </th>
                <th className='pr-4 py-1 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Pit
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200 font-medium'>
                <td className='p-4 whitespace-no-wrap table-cell text-left'>
                  1
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Valtteri Bottas <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  1:34:00.364
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  2
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Max Verstappen <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  +7.729s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200 font-medium'>
                <td className='p-4 whitespace-no-wrap table-cell text-left'>
                  3
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Lewis Hamilton <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  +22.729s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  4
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                      Sergio Perez <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  +30.558s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap table-cell text-left'>
                  5
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Daniel Ricciardo{' '}
                      <span className='text three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  +52.065s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  6
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 ferrari'>
                      Charles Leclerc <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  +1m 02.186s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap table-cell text-left'>
                  7
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Esteban Ocon{' '}
                      <span className='text three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  +1m 08.006s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  8
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                      Daniil Kvyat <span className='text'>(Alpha Tauri)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  +1m 08.740s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  9
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                      Pierre Gasly <span className='text'>(Alpha Tauri)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  +1m 29.766s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-no-wrap text-left table-cell'>
                  10
                </td>
                <td className='p-4 whitespace-no-wrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Alexander Albon <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  +1m 37.860s
                </td>
                <td className='p-4 whitespace-no-wrap table-cell text-center'>
                  53
                </td>
                <td className='pr-6 whitespace-no-wrap table-cell text-right font-semibold'>
                  2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='my-2 pr-4 text-base leading-normal text-gray-530 text-right'>
          <ContentLink href='/race-results' target='_self'>
            View Race Results...
          </ContentLink>
        </p>
      </div>
    </div>
  )
}
export default Race
