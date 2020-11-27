import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=2hQqNipYsZU'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/2hQqNipYsZU/sddefault.jpg'
              alt='Bahrain Grand Prix: Preview and Predictions'
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
            href='https://www.youtube.com/watch?v=2hQqNipYsZU'
            target='_blank'>
            Bahrain Grand Prix: Preview and Predictions
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            14 races down, 3 to go as F1 returns to Sakhir for the 2020 Bahrain
            Grand Prix. It was a thrilling race in the rain at Turkey…but what
            will we get in the heat of Bahrain? More Mercedes domination? Or
            could someone spring a surprise? In this preview, a look back at
            last year’s race, the usual track and tyre info, and I make some
            midfield predictions.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/TheF1Word/'
              target='_blank'>
              The F1 Word
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
