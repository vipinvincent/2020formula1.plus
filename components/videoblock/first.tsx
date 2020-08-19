import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=on31z11kRzI'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/on31z11kRzI/sddefault.jpg'
              alt='Latest Formula 1 2020 news : Pierre Gasly, Toto Wolff, Fernando Alonso and more'
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
            href='https://www.youtube.com/watch?v=on31z11kRzI'
            target='_blank'>
            Latest Formula 1 2020 news : Pierre Gasly, Toto Wolff, Fernando
            Alonso and more
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Latest Formula 1 2020 news updates as part of our rolling coverage.
            - Gasly’s house robbed - Wolff considering future - Alonso focused
            on Indy - Nissany runs in Spain FP1 - Williams praises team - Party
            modes out from Belgium? - Pérez unhappy with reports - Merc holding
            breath for Spa - To Sochi with fans - F1 looking to 2021 - McLaren
            tunnel delayed
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://unbeaten.com/formula1' target='_blank'>
              The Inside Line
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
