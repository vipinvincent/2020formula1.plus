import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=tXkE01Vl67o'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/tXkE01Vl67o/sddefault.jpg'
              alt='Sakhir Grand Prix Race Review F1 2020'
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
            href='https://www.youtube.com/watch?v=tXkE01Vl67o'
            target='_blank'>
            Sakhir Grand Prix Race Review F1 2020
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Formula 1 2020 Sakhir Grand Prix season is here! Today we
            analyse the F1 2020 Sakhir Grand Prix, taking a look at the Race
            Results as well as all the highlights and incidents, Verstappens's
            Crash, Perez's First Win, and the two Mercedes misfortunes! With
            Hamilton now a 7 time champion, can Leclerc, Verstappen and Norris
            challenge even closer this year?
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/RacingReviews/'
              target='_blank'>
              Racing Reviews
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
