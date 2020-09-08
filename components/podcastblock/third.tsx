import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=ObAT5Znb0A0'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/ObAT5Znb0A0/sddefault.jpg'
              alt='What The Williams Familys Departure Says About The Teams F1 Future'
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
            href='https://www.youtube.com/watch?v=ObAT5Znb0A0'
            target='_blank'>
            What The Williams Family's Departure Says About The Team's F1 Future
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The departure of Frank and Claire Williams from the team that bears
            their name is a sad moment for Formula 1. But how did we get here?
            And what does it mean for the Williams F1 team? Jess McFadyen takes
            a look into how the story unfolded.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.autosport.com/f1' target='_blank'>
              Autosport.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
