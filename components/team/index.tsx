import React from 'react'

const Team: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Constructor Standings (2019)
      </div>
      <div className='relative bg-white-100 rounded shadow-xs'>
        <div className='flex flex-col'>
          <div className='px-0'>
            <div className='align-middle inline-block min-w-full overflow-hidden'>
              <table className='min-w-full'>
                <thead>
                  <tr>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Team
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 mercedes'>
                          <span className='text'>Mercedes</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mercedes'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        739
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 ferrari'>
                          <span className='text'>Ferrari</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right ferrari'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        504
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 redbull'>
                          <span className='text'>Red Bull</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right redbull'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        417
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 mclaren'>
                          <span className='text'>McLaren</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right mclaren'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        145
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 renault '>
                          <span className='text three-d-text'>Renault</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right renault'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text three-d-text'>
                        91
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 alphatauri'>
                          <span className='text'>Toro Rosso</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right alphatauri'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        85
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 racingpoint'>
                          <span className='text'>Racing Point</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right racingpoint'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        73
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 alfaromeo'>
                          <span className='text'>Alfa Romeo</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right alfaromeo'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        57
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 haas'>
                          <span className='text'>Haas</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right haas'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        28
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                      <div className='flex items-center'>
                        <div className='text-lg leading-5 font-medium text-gray-900 williams'>
                          <span className='text'>Williams</span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right williams'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text'>
                        1
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team
