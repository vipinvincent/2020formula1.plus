import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=paL1oKNj0F4'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/paL1oKNj0F4/sddefault.jpg'
              alt='Is Time Up for Kimi Raikkonen?'
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
            href='https://www.youtube.com/watch?v=paL1oKNj0F4'
            target='_blank'>
            F1 2020 70th Anniversary GP Review
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Round 5 of the 2020 F1 season is done and dusted so here are my
            intial thoughts and reactions from the 70th Anniversary Grand Prix
            at Silverstone
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
