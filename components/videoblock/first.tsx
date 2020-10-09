import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=Ko6kU_ax7gI'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/Ko6kU_ax7gI/sddefault.jpg'
              alt='What Honda isn t telling us about its decision to quit F1'
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
            href='https://www.youtube.com/watch?v=Ko6kU_ax7gI'
            target='_blank'>
            What Honda isn't telling us about its decision to quit F1
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Are Honda's public reasons for quitting F1 after 2021 the full
            story? It would appear not. Our F1 journalist Scott Mitchell joins
            Glenn Freeman to explain what he's worked out from digging into
            what's going on behind the scenes in Japan, and why some of the
            possible reasons that have been dismissed by Honda have in fact
            played a role in its decision to leave F1 for the fourth time.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/why-hondas-f1-exit-reasons-seem-suspicious/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
