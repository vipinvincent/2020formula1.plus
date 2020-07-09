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
            href='https://www.espn.in/f1/story/_/id/29432798/racing-point-mclaren-fight-ferrari-third'
            target='_blank'>
            Magnussen: Racing Point, McLaren could fight Ferrari for third
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Kevin Magnussen thinks Racing Point and McLaren could challenge
            Ferrari for 'best of the rest' behind Mercedes and Red Bull. That
            unofficial title is normally given to the best team in the midfield,
            which in recent seasons has been a long way behind the top three
            group of Mercedes, Red Bull and Ferrari. While Racing Point appears
            to have made a big step forward this season, Ferrari's SF1000 car
            looks to have gone in the opposite direction.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari has also pledged to fast-track as many of the upgrades it
            had planned for the third race, the Hungarian Grand Prix, for this
            weekend's race. The Red Bull Ring is set to host its second race in
            seven days, the Styrian Grand Prix.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29432798/racing-point-mclaren-fight-ferrari-third'
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
