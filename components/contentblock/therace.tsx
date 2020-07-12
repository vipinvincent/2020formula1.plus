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
            href='https://the-race.com/formula-1/the-winners-and-losers-of-f1s-styrian-grand-prix/'
            target='_blank'>
            The winners and losers of F1’s Styrian Grand Prix
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Styrian Grand Prix proved a lot more straightforward than its
            counterpart from last weekend, yielding a familiar Mercedes 1-2 and
            no shock podium finishers.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Yet some still punched above their weight, while some emphatically
            did not. Below, we chronicle the winners and losers of the event.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            After a poor season opener by his lofty standards, Lewis Hamilton
            recovered in resounding fashion with an emphatic victory. OK, he
            still trails team-mate Valtteri Bottas in the championship, but F1’s
            change of venue next weekend will be accompanied by a shift in
            momentum in Hamilton’s favour. His brief moments of vulnerability,
            at the start and safety car restart, proved anything but. It wasn’t
            exciting for those watching, but it was textbook stuff from the
            six-time world champion
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://the-race.com/formula-1/the-winners-and-losers-of-f1s-styrian-grand-prix/'
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
