import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=IANdbT-lwz4'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/IANdbT-lwz4/sddefault.jpg'
              alt='How Bad Is Ferraris 2020 Season? Stories Behind The Worst Ferrari Failures EXPLAINED [TOP 5]'
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
            href='https://www.youtube.com/watch?v=IANdbT-lwz4'
            target='_blank'>
            How Bad Is Ferrari's 2020 Season? Stories Behind The Worst Ferrari
            Failures EXPLAINED [TOP 5]
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari's 2020 F1 season has not been pretty - but is it as bad
            people make it out to be? In this video we'll cover the stories of 5
            Formula 1 seasons much worse than 2020 to put things into
            perspective.
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
export default First
