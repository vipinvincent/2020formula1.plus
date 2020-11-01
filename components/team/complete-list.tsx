import React from 'react'
import ContentLink from 'components/link/ContentLink'
import TextLink from 'components/link/TextLink'

const CompleteList: React.FC = () => {
  return (
    <div className='flex flex-col mb-4 flex-grow flex-no-wrap flex-shrink-0'>
      {/* <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Detailed View
      </div> */}
      <div className='w-full grid sm:flex sm:flex-col justify-around py-2 bg-white-100 rounded-tl-xxl rounded-br-xxl shadow-xs'>
        <div className='align-middle min-w-full overflow-x-auto rounded-tl-xxl rounded-br-xl'>
          <table className='w-full table'>
            <thead>
              <tr className='bg-white-100'>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Pos
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Team
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell whitespace-no-wrap'>
                  Chassis
                </th>
                <th className='p-4 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell whitespace-no-wrap'>
                  Team Base
                </th>
                <th className='pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider table-cell whitespace-no-wrap'>
                  Points 2020 (2019)
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='odd:bg-gray-200 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-left'>
                  1
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/mercedes-amg-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 mercedes'>
                        <span className='text'>Mercedes-AMG Petronas F1</span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center  hidden sm:table-cell'>
                  W11
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center  hidden sm:table-cell'>
                  United Kingdom
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right mercedes'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text'>
                    479 (739)
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-200 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  2
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/redbull-racing-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 redbull'>
                        <span className='text'>
                          Aston Martin Red Bull Racing
                        </span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  RB16
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  United Kingdom
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right redbull'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text'>
                    226 (417)
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-200 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  3
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/renault-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 renault '>
                        <span className='text three-d-text'>
                          Renault DP World F1 Team
                        </span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  R.S.20
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  United Kingdom
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right renault'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text three-d-text'>
                    135 (91)
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-200 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  4
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/mclaren-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 mclaren'>
                        <span className='text'>McLaren F1</span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  MCL35
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  United Kingdom
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right mclaren'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text'>
                    134 (145)
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-200 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  5
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/racing-point-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 racingpoint'>
                        <span className='text'>BWT Racing Point F1</span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  RP20
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  United Kingdom
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right racingpoint'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text'>
                    134 (73)
                  </span>
                </td>
              </tr>

              <tr className='odd:bg-gray-200 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  6
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/scuderia-ferrari-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 ferrari'>
                        <span className='text'>
                          Scuderia Ferrari Mission Winnow
                        </span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  SF1000
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  Italy
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right ferrari'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text'>
                    103 (504)
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-200 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  7
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/alphatauri-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 alphatauri'>
                        <span className='text'>Scuderia AlphaTauri Honda</span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  AT01
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  Italy
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right '>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text'>
                    89 (85)
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-200 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  8
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/alfa-romeo-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 alfaromeo'>
                        <span className='text'>Alfa Romeo Racing ORLEN</span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  C39
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  Switzerland
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right alfaromeo'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text'>
                    8 (57)
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-200 bg-white-100'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  9
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/haas-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 haas'>
                        <span className='text'>Haas F1</span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  VF-20
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  United States
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right haas'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text'>
                    3 (28)
                  </span>
                </td>
              </tr>
              <tr className='odd:bg-gray-200 bg-white-100 rounded-tl-xxl rounded-br-xl-b'>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-left table-cell'>
                  10
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell'>
                  <div className='flex items-center'>
                    <TextLink href='/williams-f1' target='_self'>
                      <div className='text-base leading-5 font-medium text-gray-900 williams'>
                        <span className='text'>Williams Racing</span>
                      </div>
                    </TextLink>
                  </div>
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  FW43
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900 text-center hidden sm:table-cell'>
                  United Kingdom
                </td>
                <td className='p-4 whitespace-no-wrap border-b border-gray-200 table-cell text-right williams'>
                  <span className='px-2 inline-flex text-base leading-5 font-semibold py-2 text'>
                    0 (1)
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
