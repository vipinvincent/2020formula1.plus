import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=cI2B8ArXwhQ'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/cI2B8ArXwhQ/sddefault.jpg'
              alt='Are The New F1 Tracks Added For 2020 Overhyped? | Is It Just Me? Podcast'
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
            href='https://www.youtube.com/watch?v=cI2B8ArXwhQ'
            target='_blank'>
            Are The New F1 Tracks Added For 2020 Overhyped? | Is It Just Me?
            Podcast
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The 2020 F1 calendar will feature brand new tracks like Mugello,
            Portimao and the Bahrain outer oval, as well as returning classic
            tracks like Istanbul, Imola and Nurburgring - but will the racing be
            any good? In this weeks episode, Jess and Luke discuss if the racing
            will live up to the hype.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.autosport.com/' target='_blank'>
              Autosport
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
