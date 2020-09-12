import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=D7RqZy6nz6k'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/D7RqZy6nz6k/sddefault.jpg'
              alt='How to Master the Mugello F1 Track | Nico Rosberg'
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
            href='https://www.youtube.com/watch?v=D7RqZy6nz6k'
            target='_blank'>
            How to Master the Mugello F1 Track | Nico Rosberg
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            My next F1 Fridays episode! I was really looking forward to the
            Mugello F1 track – I’m testing it together with you. The speed in
            Mugello is phenomenal – we can look forward to an interesting 2020
            Tuscan Grand Prix in Italy. Check out my in-depth analysis of the
            Tuscan GP Track – of course also showing how to master the top speed
            corners in Mugello! This time I started with a warm up lap, followed
            by a hot lap and closing the track action in Mugello before sharing
            my analysis with you. Of course closing the video by answering your
            F1 questions!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href=' http://www.nicorosberg.com' target='_blank'>
              Nico Rosberg
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
