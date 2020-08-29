import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=CrzHNgKq-Lg'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/CrzHNgKq-Lg/sddefault.jpg'
              alt='F1 News: Red Bull "Overachieving" and Leclerc Explains Seat Belt Incident '
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
            href='https://www.youtube.com/watch?v=CrzHNgKq-Lg'
            target='_blank'>
            RACE PREVIEW: 2020 Formula 1 Belgian Grand Prix
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The eyes of the world remain on Belgium’s Ardennes region, with F1
            arriving just two weeks after the World Endurance Championship's
            six-hours of Spa- Francorchamps - where Toyota Gazoo Racing enjoyed
            its fourth one-two for 2019-20, the number seven LMP1 of Mike
            Conway, Kamui Kobayashi and José María López earning outright
            honours in changeable conditions.
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
