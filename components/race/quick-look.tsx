import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Race: React.FC = () => {
  return (
    <div className='flex flex-col mb-9 flex-grow flex-nowrap flex-shrink-0'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-3 '>
        Abu Dhabi GP 2020 - Race Results
      </div>
      <div className='w-full grid sm:flex sm:flex-col justify-around py-3 bg-white-100 rounded-md mb-4'>
        <div className='align-middle min-w-full overflow-x-auto '>
          <table className='w-full table'>
            <thead>
              <tr className='bg-white-100 border-b border-gray-200'>
                <th className='p-4 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-nowrap'>
                  Pos
                </th>
                <th className='p-4 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-nowrap'>
                  Driver
                </th>
                <th className='p-4 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                  Time
                </th>
                <th className='pr-4 py-1 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-nowrap'>
                  Pit
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200 font-medium'>
                <td className='p-4 whitespace-nowrap table-cell text-left'>
                  1
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Max Verstappen <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  1h 36m 28.645
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200 font-medium'>
                <td className='p-4 whitespace-nowrap table-cell text-left'>
                  2
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Valtteri Bottas <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  +15.976s
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200 font-medium'>
                <td className='p-4 whitespace-nowrap table-cell text-left'>
                  3
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Lewis Hamilton <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  +18.415s
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-nowrap text-left table-cell'>
                  4
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Alexander Albon <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  +19.987s
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>

              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-nowrap text-left table-cell'>
                  5
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                      Lando Norris <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  +60.729s
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-nowrap text-left table-cell'>
                  6
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                      Carlos Sainz <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  +65.662s
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-nowrap text-left table-cell'>
                  7
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Daniel Ricciardo{' '}
                      <span className='text three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  +73.748s
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-nowrap text-left table-cell'>
                  8
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                      Daniil Kvyat <span className='text'>(AlphaTauri)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  +89.718s
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200'>
                <td className='p-4 whitespace-nowrap text-left table-cell'>
                  9
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Esteban Ocon{' '}
                      <span className='text three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  +101.069s
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100 border-b border-gray-200 font-medium'>
                <td className='p-4 whitespace-nowrap table-cell text-left'>
                  10
                </td>
                <td className='p-4 whitespace-nowrap table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                      Lance Stroll <span className='text'>(Racing Point)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-nowrap table-cell text-center'>
                  +102.738s
                </td>
                <td className='pr-6 whitespace-nowrap table-cell text-right font-semibold'>
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='my-2 pr-4 text-base leading-normal text-gray-600 text-right'>
          <ContentLink href='/race-results' target='_self'>
            View Full Results...
          </ContentLink>
        </p>
      </div>
    </div>
  )
}
export default Race
