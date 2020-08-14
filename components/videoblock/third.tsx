import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=D69RkzK6pJY'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/D69RkzK6pJY/sddefault.jpg'
              alt='Spanish GP A Must Win For Bottas?'
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
            href='https://www.youtube.com/watch?v=D69RkzK6pJY'
            target='_blank'>
            Spanish GP A Must Win For Bottas?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            After finishing behind teammate Lewis Hamilton last weekend and
            falling behind Max Verstappen in the Drivers’ Championship, this
            weekend’s Spanish Grand Prix is an important race for Valtteri
            Bottas. But is it a must win race for the Finn if he wants to
            challenge for the F1 World Title?
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href=' https://www.gptoday.net/en/' target='_blank'>
              The F1 Word
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
