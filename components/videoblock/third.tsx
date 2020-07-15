import React from 'react'
import YouTube from 'react-youtube'
import ContentLink from 'components/link/ContentLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='rounded-tl-xxl text-left pb-2'>
        <div className='rounded-tl-xxl youtube'>
          <YouTube videoId='X_I_ubyk918' className='w-full h-48 lg:h-96' />
        </div>
        <div className='px-2 py-2'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Video
          </div>
          <ContentLink
            href='https://the-race.com/formula-1/video-why-ferraris-crisis-runs-much-deeper-than-drivers-colliding/'
            target='_blank'>
            Renault’s F1 protest against Racing Point’s Mercedes ‘copy’
            explained
          </ContentLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Renault pulled the trigger on a protest of Racing Point’s ‘pink
            Mercedes’ after F1’s Styrian Grand Prix, bringing months of debate
            about the legality of the car to a head. In this video we look at
            the story behind it, why Renault has specifically gone after the
            RP20’s brake ducts, what Racing Point thinks of the matter, and what
            happens now.
          </p>
          <div className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Read more
            <ul className='list-disc pl-8'>
              <li>
                <ContentLink
                  href='https://the-race.com/formula-1/10-questions-answered-about-renaults-racing-point-protest/'
                  target='_blank'>
                  10 questions answered about Renault's Racing Point protest:
                </ContentLink>{' '}
              </li>

              <li>
                <ContentLink
                  href='https://the-race.com/formula-1/racing-point-slams-renaults-poorly-informed-protest/'
                  target='_blank'>
                  Racing Point slams protest:
                </ContentLink>{' '}
              </li>
            </ul>
          </div>
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
export default Third
