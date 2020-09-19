import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=DvgQxc8nOQU'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/DvgQxc8nOQU/sddefault.jpg'
              alt='How Racing Point is moving away from its Pink Mercedes F1 design'
            />
          </div>
          <div className='h-full w-full absolute top-0 left-0 flex justify-center items-center'>
            <img
              className='w-auto h-16'
              src='/images/youtube.png'
              alt='youtube'
            />
          </div>
        </div>
      </ThumbnailLink>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Video
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=DvgQxc8nOQU'
            target='_blank'>
            How Racing Point is moving away from its Pink Mercedes F1 design
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point's RP20 F1 car has been in the spotlight since it first
            rolled out of the garage in pre-season testing. But the
            controversial design - which is no longer under protest from rivals
            - is now being evolved in a way that isn't as simple as just copying
            what Mercedes does. In this video we explain the latest updates the
            team has introduced, what makes the new parts different to what
            Mercedes has done, and why Racing Point wouldn't be able to copy
            some of the key changes Mercedes made for this year anyway.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/racing-point-moves-away-from-mercedes-design-with-upgrades/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
