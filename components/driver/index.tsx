import React from 'react'
import ContentLink from 'components/link/ContentLink'

const Driver: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Driver Standings
      </div>
      <div className='relative bg-white-100 rounded-md'>
        <div className='flex flex-col'>
          <div className='px-0'>
            <div className='align-middle inline-block w-full overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-no-wrap'>
                      Driver
                    </th>
                    <th className='pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-no-wrap'>
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  <tr>
                    <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                          Lewis Hamilton{' '}
                          <span className='text hidden xl:inline'>
                            (Mercedes)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mercedes'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        332
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 mercedes'>
                          Valtteri Bottas{' '}
                          <span className='text hidden xl:inline'>
                            (Mercedes)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mercedes'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        201
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                          Max Verstappen{' '}
                          <span className='text hidden xl:inline'>
                            (Red Bull)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right redbull'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        189
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 renault'>
                          Daniel Ricciardo{' '}
                          <span className='text three-d-text hidden xl:inline'>
                            (Renault)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 renault'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text three-d-text'>
                        102
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 racingpoint'>
                          Sergio Perez{' '}
                          <span className='text hidden xl:inline'>
                            (Racing Point)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 racingpoint'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        100
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 ferrari'>
                          Charles Leclerc{' '}
                          <span className='text hidden xl:inline'>
                            (Ferrari)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right ferrari'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        98
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                          Lando Norris{' '}
                          <span className='text hidden xl:inline'>
                            (McLaren)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mclaren'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        86
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 mclaren'>
                          Carlos Sainz{' '}
                          <span className='text hidden xl:inline'>
                            (McLaren)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mclaren'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        85
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 redbull'>
                          Alexander Albon{' '}
                          <span className='text hidden xl:inline'>
                            (Red Bull)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right redbull'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        85
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className='pl-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-sm leading-5 font-medium text-gray-900 alphatauri'>
                          Pierre Gasly{' '}
                          <span className='text hidden xl:inline'>
                            (Alpha Tauri)
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right alphatauri'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        71
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
            <ContentLink href='/driver-standings' target='_self'>
              More Details...
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Driver
