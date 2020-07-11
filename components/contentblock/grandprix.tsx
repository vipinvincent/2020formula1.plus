import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const GrandPrix: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-white-50 p-8'
          src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
          alt='grandprix247.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            grandprix247.com
          </div>
          <ActionLink
            href='https://www.grandprix247.com/2020/07/11/fia-heavy-rain-forecast-for-saturday-preparing-for-sunday-qualifying/'
            target='_blank'>
            FIA: Heavy rain forecast for Saturday, preparing for Sunday
            qualifying
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Qualifying for this weekend’s Styrian Grand Prix is likely to be
            moved to Sunday, with forecasts indicating heavy rain at the Red
            Bull Ring on Saturday.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Speaking on Friday, FIA race director Michael Masi indicated that
            Formula 1 is preparing for other eventualities with regards to
            qualifying, as there is a 76% chance of rain that is likely to
            intensify as the day goes on.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            In such an event, Masi says there are three options available. “If a
            worst case scenario was to come about, we’ve already had a look, and
            qualifying could take place on Sunday morning,” he told RaceFans.
            “So that’s a great option there.”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/11/fia-heavy-rain-forecast-for-saturday-preparing-for-sunday-qualifying/'
              target='_blank'>
              grandprix247.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default GrandPrix
