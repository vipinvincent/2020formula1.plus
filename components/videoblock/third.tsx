import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=rhAKrTOlbA8'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/rhAKrTOlbA8/sddefault.jpg'
              alt='RACE ANALYSIS: 2020 Formula 1 Spanish Grand Prix'
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
            href='https://www.youtube.com/watch?v=rhAKrTOlbA8'
            target='_blank'>
            RACE ANALYSIS: 2020 Formula 1 Spanish Grand Prix
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Barcelona’s Circuit de Catalunya remains a fixture on the Formula
            One calendar, with 2020’s edition a golden milestone - the 50th
            Spanish Grand Prix, and 30th held at the familiar Montmeló track. …
            and golden performance, from the sport’s six-time F1 World Champion
            Lewis Hamilton, who shrugged off concerns about blistering rubber in
            the Spanish sun, to dominate from lights-to-flag for his fourth
            victory of 2020, his fifth in Barcelona, his fourth-straight there,
            and 88th overall.
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
export default Third
