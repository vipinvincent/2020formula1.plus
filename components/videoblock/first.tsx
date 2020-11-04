import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=VvDgM16fw3M'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/VvDgM16fw3M/sddefault.jpg'
              alt='Has Alex Albon Sealed His Fate at Red Bull?'
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
            href='https://www.youtube.com/watch?v=VvDgM16fw3M'
            target='_blank'>
            Has Alex Albon Sealed His Fate at Red Bull?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            With another disappointing performance at the Imola GP, Alex Albon's
            future is up in the air. Jon Noble, Motorsport.com Editor, is joined
            by Stuart Codling, GP Racing Executive Editor, to discuss Alex Albon
            and the potential fate of the 2nd Red Bull seat.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.autosport.com/' target='_blank'>
              Autosport]
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
