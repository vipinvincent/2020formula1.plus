import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=H3DNJBSRJDU'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/H3DNJBSRJDU/sddefault.jpg'
              alt='Building the Greatest F1 Team | Episode 1: Race Engineer'
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
            href='https://www.youtube.com/watch?v=H3DNJBSRJDU'
            target='_blank'>
            Building the Greatest F1 Team | Episode 1: Race Engineer
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Welcome to a very special 7-part series where we've asked the
            question: what would the lineup of the greatest F1 team look like?
            We’ve set out to build a team made up of the best there ever was.
            The first vacancy we're filling today is that of Race Engineer. On
            the podcast, your host Jessica McFadyen is joined by James Allen,
            Jonathan Noble, Stuart Codling and James Newbold.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.motorsport.com/f1/' target='_blank'>
              Motorsport.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
