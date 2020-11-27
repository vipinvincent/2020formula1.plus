import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=IR68jU6Fuz8'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/IR68jU6Fuz8/sddefault.jpg'
              alt='The Genius Aero Trick That F1 Copied from Concorde '
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
            href='https://www.youtube.com/watch?v=IR68jU6Fuz8'
            target='_blank'>
            The Genius Aero Trick That F1 Copied from Concorde
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Look at these strange vapour trails coming off the rear wing of
            these F1 cars. They are only visible in certain conditions but are
            present whenever the car is at speed. It’s the effect that enables
            flies to fly, and the Concorde to reach such high speeds. They are
            called Vortices, and are a natural bi-product of an F1 car’s wings.
            They produce a lot of drag and ultimately slow the cars down.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://driver61.com/' target='_blank'>
              Driver61
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
