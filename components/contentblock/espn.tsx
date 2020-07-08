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
            href='https://www.espn.in/f1/story/_/id/29417103/formula-one-boss-brawn-vettel-bound-distracted-ferrari-axe'
            target='_blank'>
            Formula One boss Brawn: Vettel bound to be distracted by Ferrari axe
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Sebastian Vettel endured a nightmare start to the season in Austria
            on Sunday and Formula One's motorsport managing director Ross Brawn
            suggested being dropped by Ferrari for 2021 had affected his
            concentration. Vettel, a four-times world champion with Red Bull,
            qualified only 11th at the Red Bull Ring and then tangled with
            McLaren's Carlos Sainz in the race, finishing 10th for the final
            point on offer. Spaniard Sainz is also the man replacing the German
            at Maranello next year alongside Charles Leclerc, who finished a
            surprise second on Sunday despite Ferrari's performance problems.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29417103/formula-one-boss-brawn-vettel-bound-distracted-ferrari-axe'
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
