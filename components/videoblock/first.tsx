import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=RFdpI64AlzU'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/RFdpI64AlzU/sddefault.jpg'
              alt='The Top Grand Prix Winners in F1 History (1950-2020)'
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
            href='https://www.youtube.com/watch?v=RFdpI64AlzU'
            target='_blank'>
            The Top Grand Prix Winners in F1 History (1950-2020)
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton has broken Michael Schumacher's record of the most
            Formula 1 race wins, after winning his 92nd Grand Prix at the 2020
            Portuguese GP. In this video we take a look back at the previous top
            record holders from 1950 all the way through to 2020.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href=' https://www.autosport.com/' target='_blank'>
              Autosport
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
