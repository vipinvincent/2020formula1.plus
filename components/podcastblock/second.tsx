import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=YZpDJ_L_ctM'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/YZpDJ_L_ctM/sddefault.jpg'
              alt='Hondas History Of Leaving Formula 1 & Why It Matters This Time'
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
            href='https://www.youtube.com/watch?v=YZpDJ_L_ctM'
            target='_blank'>
            Honda's History Of Leaving Formula 1 & Why It Matters This Time
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Formula 1 is set to lose another engine for 2022. But why is Honda
            leaving this time? Have they done this before? Why? Does this one
            mean more? What are Red Bull's Options? Get all those answers in
            this video.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/CrankyYankeeF1'
              target='_blank'>
              CrankyYankeeF1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
