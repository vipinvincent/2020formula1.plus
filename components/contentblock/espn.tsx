import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const ESPN: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 w-full'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-espn'
          src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
          alt='espn.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            espn.com
          </div>
          <ActionLink
            href='https://www.espn.in/f1/story/_/id/29434620/what-reverse-grid-styrian-grand-prix-looked-weekend'
            target='_blank'>
            What would a reverse-grid Styrian Grand Prix have looked like this
            weekend?
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ahead of the rescheduled 2020 season, Formula One discussed the idea
            of running a reverse grid qualifying race at this weekend's Styrian
            Grand Prix, the name given to the second race at Austria's Red Bull
            Ring.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The concept was fairly simple. To make back-to-back races at the
            same venue more exciting, F1's traditional qualifying session would
            be replaced by a short race, with the starting decided by reversing
            the championship standings. The finishing order of the qualifying
            race would then determine the grid for Sunday's grand prix.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29434620/what-reverse-grid-styrian-grand-prix-looked-weekend'
              target='_blank'>
              espn.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default ESPN
