import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=qRt_sikgMWw'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/qRt_sikgMWw/sddefault.jpg'
              alt='FP1 Post Podium Podcast Episode 5: 70th Anniversary Grand Prix'
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
            Podcast
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=qRt_sikgMWw'
            target='_blank'>
            FP1 Post Podium Podcast Episode 5: 70th Anniversary Grand Prix
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Welcome back to the FP1 Post Podium Podcast, back this week with The
            Apex Motorsport to discuss the 70th Anniversary Grand Prix. Make
            sure you check out the guys and subscribe to their channel, all
            links are below!
          </p>

          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/channel/UCihjJgRm3Th-quKmTW-9AwQ'
              target='_blank'>
              FP1 - Formula Podcast One
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
