import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=YYCGlAYoYt8'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/YYCGlAYoYt8/sddefault.jpg'
              alt='How to Master the Spanish GP! | Nico Rosberg'
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
            href='https://www.youtube.com/watch?v=YYCGlAYoYt8'
            target='_blank'>
            How to Master the Spanish GP! | Nico Rosberg
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            My next F1 Fridays episode! What an incredibly interesting Formula 1
            2020 Season so far! Check out my in-depth analysis of the 2020
            Spanish Grand Prix track. where I share the F1 drivers’ secrets on
            how to master the Circuit de Barcelona-Catalunya. Of course,
            followed by a hot lap and my F1 Fan Q&A – answering your questions
            about the Spanish GP weekend.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.nicorosberg.com' target='_blank'>
              Nico Rosberg
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
