import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import SiderBarLink from 'components/link/SiderBarLink'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mt-0 mb-1'>
        Recent Race
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
        <div className='h-32 sm:h-40 w-full text-center'>
          <img
            className='w-full h-full object-contain rounded-tl-xxl rounded-br-xl-t pt-0 text-center'
            src='https://upload.wikimedia.org/wikipedia/commons/archive/b/b2/20140623145614%21Circuit_Red_Bull_Ring.svg'
            alt='2020 Austrian Grand Prix'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <ActionLink href='/circuit-details' target='_self'>
              Formula 1 Rolex Grosser Preis Von Österreich 2020
            </ActionLink>
            <p className='mt-1 text-sm leading-normal text-gray-700'>
              Formula 1 Rolex Grosser Preis Von Österreich 2020 (Austrian Grand
              Prix), which takes place over 71 laps of the 4.318-kilometre Red
              Bull Ring in Spielberg on Sunday, July 5 2020.
            </p>
          </div>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Circuit Name
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Red Bull Ring
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  4.318km (10 turns)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  71 laps (306.452km)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Lap Record
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 ferrari'>
                  Kimi Raikkonen (<span className='text'>Ferrari</span>)<br />{' '}
                  1:06.957 (2018)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-b sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  <SiderBarLink
                    className='text-primart-on'
                    href='/race-results'
                    target='_self'>
                    Race Results
                  </SiderBarLink>
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:30:55.739
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block ferrari'>
                      Charles Leclerc (<span className='text'>Ferrari</span>){' '}
                      <br />
                      +2.700s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mclaren'>
                      Lando Norris (<span className='text'>McLaren</span>){' '}
                      <br />
                      +5.491s
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-b sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  <SiderBarLink
                    className='text-primart-on'
                    href='/qualifying-results'
                    target='_self'>
                    Qualifying Results
                  </SiderBarLink>
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:02.939
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:02.951
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:03.477
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
            <ContentLink href='/race-results' target='_self'>
              More details...
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Schedule