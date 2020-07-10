import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const TheRace: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-gray-800 px-8 py-8'
          src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
          alt='the-race.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            the-race.com
          </div>
          <ActionLink
            href='https://the-race.com/formula-1/gary-anderson-the-first-glimpse-of-ferraris-hurried-update/'
            target='_blank'>
            Gary Anderson: The first glimpse of Ferrari’s hurried update
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari has pushed through part of its planned Hungarian Grand Prix
            aerodynamic upgrade to trial at the Red Bull Ring this weekend, with
            a new front wing already appearing in the pitlane.
            <br />
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Further parts are expected to be revealed tomorrow when the car hits
            the track for free practice, but for this first part of its catch-up
            programme it has modified the footplate and the top flap of its
            front wing.
            <br />
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The footplate of the front wing endplate now has a circular leading
            edge (blue) as opposed the more rectangular version (green). Also,
            the trailing edge of the rear flap is reprofiled (blue) as opposed
            to the old version (green) which appears to have a dip in the
            middle. The leading edge of the endplate foot change should reduce
            the sensitivity when that area gets close to the ground during
            braking and turning into the corner – otherwise I’m not too sure I
            see it doing much to help the car’s overall performance
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://the-race.com/formula-1/gary-anderson-the-first-glimpse-of-ferraris-hurried-update/'
              target='_blank'>
              the-race.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default TheRace
