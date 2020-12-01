import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=E54m1inikIY'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/E54m1inikIY/sddefault.jpg'
              alt='How to Master the Bahrain GP 2020 | Nico Rosberg | LATEST NEWS | Hamiltons seventh, Pirellis Mario Isola, and Red Bulls Bosphorus run
'
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
            href='https://www.youtube.com/watch?v=E54m1inikIY'
            target='_blank'>
            How to Master the Bahrain GP 2020 | Nico Rosberg
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            We are back in Bahrain for the 2020 Bahrain GP. A special race track
            for me with my first Bahrain GP victory in 2016...and of course also
            the very special battle vs. Let's see if we have the first rainy
            race in Bahrain this year! Friday's practice session was already
            quite interesting...we can all look forward to an interesting F1
            race weekend. Check out my Hot Lap and analysis of the Bahrain
            International Circuit. Of course followed by an F1 Fan Q&A.
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
export default Fourth
