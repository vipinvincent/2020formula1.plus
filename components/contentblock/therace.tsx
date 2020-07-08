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
            href='https://the-race.com/formula-1/mercedes-gearbox-problem-will-reappear-with-current-spec/'
            target='_blank'>
            Mercedes’ gearbox problem will reappear with current spec
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Mercedes says its gearbox problem at the Formula 1 season opener
            will reappear with the car’s current specification but hopes to
            minimise the impact at the second Austrian race. F1 is sticking with
            the Red Bull Ring to follow up the Austrian Grand Prix with the
            Styrian Grand Prix as the same circuit is used twice for the first
            time in championship history because of the calendar revisions
            prompted by the coronavirus pandemic. As the teams face the
            challenges of the Spielberg circuit for the second week in a row,
            Mercedes could be hit by the gearbox concerns than team boss Toto
            Wolff said could have been an “instant kill” in Sunday’s grand prix.
            Mercedes had a critical sensor problem on both cars during the race
            which it believes is due to oscillations caused by the nature of the
            aggressive track layout and the impact that has with the specific
            design of its car.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://the-race.com/formula-1/mercedes-gearbox-problem-will-reappear-with-current-spec/'
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
