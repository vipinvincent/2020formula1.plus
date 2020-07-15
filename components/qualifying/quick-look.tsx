import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Qualifying: React.FC = () => {
  return (
    <div className='flex flex-col mb-9 flex-grow flex-no-wrap flex-shrink-0'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        2020 Styrian Grand Prix - Qualifying Results
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
                  1:19.273 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
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
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:20.489 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  3
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                      Carlos Sainz <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:20.671 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  4
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                      Valtteri Bottas <span className='text'>(Mercedes)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:20.701 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right '>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  5
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Esteban Ocon{' '}
                      <span className='text  three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:20.922 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right mclaren'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  6
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                      Lando Norris <span className='text'>(McLaren)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:20.925 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right redbull'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  7
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                      Alexander Albon <span className='text'>(Red Bull)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:21.011 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  8
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                      Pierre Gasly <span className='text'>(AlphaTauri)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:21.028 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right alfaromeo'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  9
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                      Daniel Ricciardo{' '}
                      <span className='text three-d-text'>(Renault)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:21.192 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right mclaren'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-100 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  10
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <div className='text-sm leading-5 font-medium text-gray-900 ferrari'>
                      Sebastian Vettel <span className='text'>(Ferrari)</span>
                    </div>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center'>
                  1:21.651 (Q3)
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right mclaren'>
                  <span className='pl-2 inline-flex text-base leading-8 font-semibold rounded-full bg-black-80 w-8 h-8 text-blue-600'>
                    W
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
            <ContentLink href='/qualifying-results' target='_self'>
              View Full Qualifying Results...
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Qualifying