import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=BxN-s4FFQ14'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/BxN-s4FFQ14/sddefault.jpg'
              alt='Sebastian Vettel gets a new chassis & denies failing relationship with Ferrari - F1 News 14 08 20'
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
            href='https://www.youtube.com/watch?v=BxN-s4FFQ14'
            target='_blank'>
            Sebastian Vettel gets a new chassis & denies failing relationship
            with Ferrari - F1 News 14 08 20
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Vettel was mysteriously off the pace at both rounds of the British
            events, scoring just a solitary point from two races, while Charles
            Leclerc was noticeably more competitive including snatching a podium
            in the first race. This led to some comments from Vettel saying that
            he was ‘out of answers’ in how to fix his issues, while saying the
            pace difference between himself and his teammate was ‘unusual’.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.formulaspy.com' target='_blank'>
              Thomas Maher
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
