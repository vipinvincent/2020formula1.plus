import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=UsWiTkyv3XU'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/UsWiTkyv3XU/sddefault.jpg'
              alt='Sakhir Grand Prix: Preview and Predictions'
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
            href='https://www.youtube.com/watch?v=UsWiTkyv3XU'
            target='_blank'>
            Sakhir Grand Prix: Preview and Predictions
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            This weekend’s Sakhir Grand Prix will see F1 cars take on the
            Bahrain Outer Loop circuit for the first time…but that’s not the
            only significant change this weekend. In this preview, I take a look
            at the circuit stats, make my predictions, go over the driver
            changes and Tom takes you on a virtual lap of the new track.
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
export default Third
