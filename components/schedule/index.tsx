import React from 'react'
import ActionLink from 'components/link/ActionLink'
// import ContentLink from 'components/link/ContentLink'

const Schedule: React.FC = () => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on text-left mb-1'>
        Upcoming Race
      </div>
      <div className='relative bg-white-100 rounded shadow-xs'>
        <div className='h-32 sm:h-40 w-full text-center'>
          <img
            className='w-full h-full object-contain rounded-t pt-2 text-center'
            src='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/7col-retina/image.png'
            alt='2020 Austrian Grand Prix'
          />
        </div>
        <div className='relative max-w-screen-xl mx-auto'>
          <div className='py-4 text-left px-4'>
            <ActionLink href='#' target='self'>
              2020 Austrian Grand Prix
            </ActionLink>
            <p className='mt-1 text-sm leading-normal text-gray-700'>
              Formula 1 Rolex Grosser Preis Von Österreich 2020 (Austrian Grand
              Prix), which takes place over 71 laps of the 4.318-kilometre Red
              Bull Ring in Spielberg on Sunday, July 5 2020.
            </p>
          </div>
          <div className='bg-white overflow-hidden'>
            <div className='px-4 pb-5 border-b border-gray-200'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Circuit Facts ( Red Bull Ring )
              </h3>
              <p className='mt-1 max-w-2xl text-sm leading-5 text-gray-500'>
                Austrian Grand Prix Facts
              </p>
            </div>
            <div className='px-4 py-5 sm:p-0 text-left'>
              <dl>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 sm:py-5'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>
                    Circuit Name
                  </dt>
                  <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    Red Bull Ring
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 sm:py-5 sm:border-t sm:border-gray-200'>
                  <dt className='text-sm leading-5 font-medium text-gray-500'>
                    Track Length
                  </dt>
                  <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    4.318km (10 turns)
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 sm:py-5 sm:border-t sm:border-gray-200'>
                  <dt className='text-sm leading-5 font-medium text-gray-500 '>
                    Race Distance
                  </dt>
                  <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    71 laps (306.452km)
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 sm:py-5 sm:border-t sm:border-gray-200'>
                  <dt className='text-sm leading-5 font-medium text-gray-500 self-center'>
                    Lap Record
                  </dt>
                  <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    1:06.957 (2018)
                    <br />
                    Kimi Raikkonen (Ferrari)
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 sm:py-5 sm:border-t sm:border-gray-200'>
                  <dt className='text-sm leading-5 font-medium text-gray-500 self-center'>
                    2019 Winner
                  </dt>
                  <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    Max Verstappen (Red Bull) <br />
                    1:22:01.822
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {/* <p className='mt-4 text-base leading-normal text-gray-700'>
              Visit{' '}
              <ContentLink
                href='https://www.formula1.com/en/latest/article.f1-schedule-2020-latest-information.3P0b3hJYdFDm9xFieAYqCS.html'
                target='_blank'>
                formula1.com
              </ContentLink>{' '}
              for more details...
            </p> */}
        </div>
      </div>
    </div>
  )
}
export default Schedule
