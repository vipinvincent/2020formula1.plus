import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
// import SiderBarLink from 'components/link/SiderBarLink'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Upcoming Race
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
        <div className='h-32 sm:h-48 py-4 w-full text-center'>
          <img
            className='w-full h-full object-contain rounded-tl-xxl rounded-br-xl-t pt-2 text-center'
            src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597123333/contentImages/circuit/catalunya-circuit_hicodt.png'
            alt='2020 Spanish Grand Prix'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <ActionLink href='/circuit-details' target='_self'>
              Formula 1 Aramco Gran Premio De España 2020
            </ActionLink>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              2020 Spanish Grand Prix takes place over 66 laps of the
              4.655-kilometre Circuit de Barcelona-Catalunya on Sunday, August
              16.
            </p>
          </div>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 pb-5 border-b border-gray-200'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Circuit Facts ( Circuit de Barcelona-Catalunya )
              </h3>
              <p className='mt-1 text-sm leading-5 text-gray-500'>
                Spanish Grand Prix Facts
              </p>
            </div>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Circuit Name
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Circuit de Barcelona-Catalunya
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  4.655 km (2.892 mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Turns
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  16 turns
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  66 laps (307.104 km)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Lap Record
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 redbull'>
                  Daniel Ricciardo (<span className='text'>Red Bull</span>){' '}
                  <br />
                  1:18.441 (2018)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-b sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2020 Winner
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:31:45.279
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-b sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  {/* <SiderBarLink
                    className='text-primart-on'
                    href='/race-results'
                    target='_self'>
                    Race Results
                  </SiderBarLink> */}
                  2019 Race
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:35:50.443s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>){' '}
                      <br />
                      +4.074s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      +7.679s
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-b sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  {/* <SiderBarLink
                    className='text-primart-on'
                    href='/qualifying-results'
                    target='_self'>
                    Qualifying Results
                  </SiderBarLink> */}
                  2019 Qualifying
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:15.406
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:16.040
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block ferrari'>
                      Sebastian Vettel (<span className='text'>Ferrari</span>){' '}
                      <br />
                      1:16.272
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
            <ContentLink href='/circuit-details' target='_self'>
              More Details...
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Schedule
