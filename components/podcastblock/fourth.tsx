import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=ee9OF7HggD0'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/ee9OF7HggD0/sddefault.jpg'
              alt='I found out officially last night | Sergio Perez discusses Racing Point Exit'
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
            PODCAST
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=ee9OF7HggD0'
            target='_blank'>
            'I found out officially last night' | Sergio Perez discusses Racing
            Point Exit
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Sky pundit (and F1 World Champion) Jenson Button joins Matt and
            Tommy after a chaotic Italian Grand Prix to discuss whether reverse
            grid races could work in the future.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news'
              target='_blank'>
              Sky Sports F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
