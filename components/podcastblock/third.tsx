import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=HoZzm8SkNOc'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/HoZzm8SkNOc/sddefault.jpg'
              alt='Bahrain Grand Prix Preview F1 2020'
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
            href='https://www.youtube.com/watch?v=HoZzm8SkNOc'
            target='_blank'>
            Bahrain Grand Prix Preview F1 2020
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Formula 1 is back this weekend for the F1 2020 Bahrian Grand Prix!
            Today we preview the weekend/race, taking a look at last seasons
            results, the championship so far, a hot lap of the Sehkir Circuit,
            My predictions and a look at the schedule for this weekends F1 and
            F2! ! With Hamilton now a 7 time champion, can Bottas, Leclerc,
            Verstappen and Vettel challenge even closer this year?
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/F1Reviews/'
              target='_blank'>
              F1/E Reviews
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
