import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=g7PFXCwLkdQ'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/g7PFXCwLkdQ/sddefault.jpg'
              alt='Lewis Penalty, Best Pizzas & More | 2020 Italian GP F1 Debrief'
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
            href='https://www.youtube.com/watch?v=g7PFXCwLkdQ'
            target='_blank'>
            Lewis' Penalty, Best Pizzas & More | 2020 Italian GP F1 Debrief
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            It's a two for one special this week in Italy, as we asked both
            James and Shov your big questions from the Italian Grand Prix! We're
            taking on all the big topics, from the details behind Lewis'
            race-changing penalty, Valtteri's struggles in the traffic, and the
            BIG one... Shov's theory on the perfect pizza!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.mercedesamgf1.com/en/'
              target='_blank'>
              Mercedes-AMG Petronas F1 Team
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
