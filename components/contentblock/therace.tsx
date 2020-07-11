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
            href='https://the-race.com/formula-1/f1s-on-the-limit-qualifying-call-praised-by-drivers/'
            target='_blank'>
            F1’s ‘on the limit’ qualifying call praised by drivers
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Styrian Grand Prix poleman Lewis Hamilton says Formula 1 nailed an
            “on the limit” call to allow qualifying to take place in full in the
            wet at the Red Bull Ring.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The F1 paddock went into Saturday pessimistic about the possibility
            of track action taking place, but while the morning’s practice
            session was rained out, qualifying did take place with minimal
            delays after an initial 46-minute wait.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            All three segments were held, and Hamilton – who would’ve had to
            start sixth on the basis of Friday afternoon results if qualifying
            had been completely shelved this weekend – eventually took pole
            position by over a second, revelling in the conditions. The Formula
            2 feature race was set to get going following F1’s qualifying, but
            was red-flagged after several formation laps.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://the-race.com/formula-1/f1s-on-the-limit-qualifying-call-praised-by-drivers/'
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
