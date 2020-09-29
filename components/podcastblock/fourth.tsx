import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=6sBk0ycJRy4'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/6sBk0ycJRy4/sddefault.jpg'
              alt='Explaining Controversial F1 Race Directors Notes'
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
            PODCAST
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=6sBk0ycJRy4'
            target='_blank'>
            Explaining Controversial F1 Race Director's Notes
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The F1 Race Director's Event Notes have been at the centre of a
            number of controversial F1 penalties recently, so this video takes a
            closer look at exactly what's contained in this ever changing, but
            critically important document.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/F1Elvis'
              target='_blank'>
              Marc Priestley F1 Elvis
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
