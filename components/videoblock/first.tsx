import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=SBvsD62knUY'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/SBvsD62knUY/sddefault.jpg'
              alt='How will the Haas vacancies affect the F1 2021 Driver Market?'
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
            href='https://www.youtube.com/watch?v=SBvsD62knUY'
            target='_blank'>
            How will the Haas vacancies affect the F1 2021 Driver Market?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Jon Noble, Motorsport.com F1 Editor, breaks down the Haas news that
            both drivers, Romain Grosjean and Kevin Magnussen, will be leaving
            the team at the end of the season. We look at how this big shake up
            affects the F1 paddock and look at the potential 2021 Team and
            Driver line ups.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href=' https://www.autosport.com/' target='_blank'>
              Autosport
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
