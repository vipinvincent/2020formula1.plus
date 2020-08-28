import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=1ZtdPEtEKgk'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/1ZtdPEtEKgk/sddefault.jpg'
              alt='The verdict on F1s new almost oval track with sub-60s lap'
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
            href='https://www.youtube.com/watch?v=1ZtdPEtEKgk'
            target='_blank'>
            The verdict on F1's new 'almost oval' track with sub-60s lap
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            It's official - Formula 1 will race on Bahrain's "sort of almost
            oval" this year. That means a sub-60s lap on a barely-known circuit
            layout. So we've tried it for ourselves, and explored the challenges
            of what is set to be the shortest lap in F1 history. What do you
            think?
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://the-race.com/' target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
