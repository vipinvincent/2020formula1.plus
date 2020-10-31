import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=lpNkpVCptIQ'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/lpNkpVCptIQ/sddefault.jpg'
              alt='How to Master the Imola F1 Track | Nico Rosberg'
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
            href='https://www.youtube.com/watch?v=lpNkpVCptIQ'
            target='_blank'>
            How to Master the Imola F1 Track | Nico Rosberg
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            It’s the third Formula race in Italy this year – we can be very
            excited about this track! The 2020 Imola Grand Prix will surely be
            exciting as the Imola F1 Track is super special – the former home of
            the San Marino GP! This year it’s the 2020 Emilia Romagna Grand Prix
            – I’m taking you again on a slow lap to analyse every details of the
            racing track in Imola. Followed by my Imola Hot Lap and of course
            the Q&A where I also share my personal F1 experience in Imola.
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
export default First
