import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import SiderBarLink from 'components/link/SiderBarLink'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1 px-2 '>
        Round 11 - Eifel GP
      </div>
      <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
        <div className='h-32 sm:h-48 py-4 w-full text-center'>
          <img
            className='w-full h-full object-contain rounded-tl-xxl rounded-br-xl-t pt-2 px-8 text-center'
            src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1601533556/contentImages/circuit/Nu%CC%88rburgring_-_Grand-Prix_ozbjpo.png'
            alt='2020 German Grand Prix'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <ActionLink href='/nurburgring' target='_self'>
              Formula 1 Aramco Grosser Preis Der Eifel 2020
            </ActionLink>
            <p className='mt-1 text-base leading-normal text-gray-700'>
              2020 Eifel Grand Prix, which takes place over 60 laps of the 5.148
              km(3.199 mi) Nurburgring, former host of the German Grand Prix, on
              Sunday, October 11th.
            </p>
          </div>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 pb-5 border-b border-gray-200'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Circuit Facts ( Nürburgring Autodrom )
              </h3>
              <p className='mt-1 text-sm leading-5 text-gray-500'>
                German Grand Prix Facts
              </p>
            </div>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Circuit Name
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  Nürburgring
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Track Length
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  5.148 (3.199 mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Turns
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  15 turns
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t  sm:border-gray-200 '>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Race Distance
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2'>
                  60 laps (308.617 km - 191.766mi)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1'>
                  Lap Record
                </div>
                <div className='mt-1 text-sm leading-5 sm:leading-7 text-gray-800 sm:mt-0 sm:col-span-2 ferrari'>
                  Michael Schumacher (<span className='text'>Ferrari</span>){' '}
                  <br />
                  1:29.468 (2004)
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-t sm:border-b sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  2013 Winner
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Sebastian Vettel (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:41:14.711
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 pt-0 pb-4 sm:pt-5 sm:pb-5 sm:border-b sm:border-gray-200'>
                <div className='text-sm leading-5 font-medium text-gray-500 sm:col-span-1 self-center'>
                  <SiderBarLink
                    className='text-primart-on'
                    href='/race-results'
                    target='_self'>
                    Race Results
                  </SiderBarLink>
                  {/* 2020 Race */}
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:35:49.641
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      +4.470s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block renault'>
                      Daniel Ricciardo (
                      <span className='text three-d-text'>Renault</span>) <br />
                      +14.613s
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
                  {/* 2020 Qualifying */}
                </div>
                <div className='mt-1 text-sm leading-5 text-gray-800 sm:mt-0 sm:col-span-2 self-start'>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Valtteri Bottas (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:25.269s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block mercedes'>
                      Lewis Hamilton (<span className='text'>Mercedes</span>){' '}
                      <br />
                      1:25.525s
                    </div>
                  </div>
                  <div className='inine-block pb-4'>
                    <div className='text-sm leading-5 sm:leading-7 text-gray-800 inline-block redbull'>
                      Max Verstappen (<span className='text'>Red Bull</span>){' '}
                      <br />
                      1:25.562s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='my-2 pr-4 text-base leading-normal text-gray-700 text-right'>
            <ContentLink href='/nurburgring' target='_self'>
              More Details...
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Schedule
