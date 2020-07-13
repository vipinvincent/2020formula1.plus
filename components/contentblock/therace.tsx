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
            href='https://the-race.com/formula-1/why-racing-points-pink-mercedes-was-finally-protested/'
            target='_blank'>
            Why Racing Point’s ‘2019 Mercedes’ was finally protested
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Renault’s formal protest of the legality of the 2020 Racing Point
            Formula 1 car design following the Styrian Grand Prix brings a
            long-running grievance to a head.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The similarities of the RP20 to last year’s Mercedes have been known
            since the car was publicly unveiled at pre-season testing and Racing
            Point has not shied away from the fact the 2019 Mercedes was the
            inspiration for its car design.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            However it has always insisted that the 2019 Mercedes was only ever
            an inspiration – Racing Point says it simply studied the car from
            photographs any team could have gathered, and did not create its
            interpretation of the design through illegal means.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://the-race.com/formula-1/why-racing-points-pink-mercedes-was-finally-protested/'
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
