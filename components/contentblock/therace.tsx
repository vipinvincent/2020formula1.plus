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
            Why Albon now has an advantage over Hamilton
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Alex Albon has an advantage, one he must capitalise on given the
            opportunity. And it’s all because of his two collisions with Lewis
            Hamilton in the last three Formula 1 races.
            <br />
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Were an on-track situation involving the pair that casts Albon as
            the aggressor and Hamilton as the defender to arise again, the
            Mercedes driver surely cannot fail to be more conservative.
            Regardless of whether you feel the Austrian GP collision merited a
            penalty or was a racing incident, in terms of the specific dynamics
            of the clash Hamilton was the one in the wrong.
            <br />
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Albon will be very aware that it will be on Hamilton’s mind. While
            it doesn’t mean the Mercedes driver will simply jump out of the way
            in battle, he is likely to be more compliant. If that same move
            happened into Turn 4, this would likely mean he will be far more
            conservative and not only allow Albon more room but likely even too
            much room. The likelihood is, he will overcompensate.
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
