import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=a4LjTe9Tt2M'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/a4LjTe9Tt2M/sddefault.jpg'
              alt='How Bad is Valtteri Bottas (in 2020...)'
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
            href='https://www.youtube.com/watch?v=a4LjTe9Tt2M'
            target='_blank'>
            How Bad is Valtteri Bottas (in 2020...)
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            So the breaking news of Sergio Perez leaving Racing Point last night
            has paved the way for Sebastian Vettel to sign for Aston Martin in
            2021. Here I give my thoughts on it all!So with the 2020 season
            being so one sided from a constructors point of view, I thought it
            would be interesting to look into Valtteri Bottas' start to the
            year, and investigate as to why he hasn't managed to keep up his
            strong performance from the start of the year... Let me know your
            thoughts on it all in the comments...
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/channel/UCihjJgRm3Th-quKmTW-9AwQ'
              target='_blank'>
              FP1 - Formula Podcast One
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
