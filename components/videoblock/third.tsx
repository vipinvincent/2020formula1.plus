import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=P5ElejQKc2I'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/P5ElejQKc2I/sddefault.jpg'
              alt='Are Ferraris young guns all headed for F1? Schumacher, Ilott and Shwartzmans Fiorano test.'
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
            href='https://www.youtube.com/watch?v=P5ElejQKc2I'
            target='_blank'>
            Are Ferrari's young guns all headed for F1? Schumacher, Ilott and
            Shwartzman's Fiorano test.
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari may be out in the cold with its current car, the off-the
            pace SF1000, which was designed for a much more powerful engine.
            But, the Ferrari Driver Academy is red hot, especially in feeder
            series, the FIA F2 championship, with three of its drivers - Mick
            Schumacher, Callum Ilott and Robert Shwartzman - in the top-five -
            young guns who will all get their maiden FP1 sessions this year.
            Watch the video, and tell us what you think in the comments…
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://unbeaten.com/formula1' target='_blank'>
              Unbeaten F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
