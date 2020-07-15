import React from 'react'
import YouTube from 'react-youtube'
import ContentLink from 'components/link/ContentLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='rounded-tl-xxl text-left pb-2'>
        <div className='rounded-tl-xxl youtube'>
          <YouTube videoId='rMxRcorzhcw' className='w-full h-82 md:h-96' />
        </div>
        <div className='px-2 py-2'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Video
          </div>
          <ContentLink
            href='https://the-race.com/formula-1/video-why-ferraris-crisis-runs-much-deeper-than-drivers-colliding/'
            target='_blank'>
            Why Ferrari's F1 crisis runs much deeper than its drivers colliding
          </ContentLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari’s 2020 F1 season went from bad to worse at the Styrian Grand
            Prix. Its rushed upgrades didn’t appear to offer much improvement,
            and after its cars qualified in the middle of the grid they collided
            on the first lap when Charles Leclerc ran into Sebastian Vettel,
            putting both out of the race. Leclerc took the blame for the
            incident so it shouldn’t be a long-running problem, but Ferrari’s
            lack of pace is. Edd Straw and Scott Mitchell join Glenn Freeman to
            look at just how bad things are for Ferrari, and whether there is
            any light at the end of the tunnel as it bids to turn its fortunes
            around
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Courtesy{' '}
            <ContentLink href='https://the-race.com/' target='_blank'>
              the-race.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
