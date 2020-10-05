import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=eMkdM2CTO4k'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/eMkdM2CTO4k/sddefault.jpg'
              alt='McLaren F1s Brilliant, Yet Terrible, Pitstop Trick'
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
            href='https://www.youtube.com/watch?v=eMkdM2CTO4k'
            target='_blank'>
            McLaren F1's Brilliant, Yet Terrible, Pitstop Trick
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Another F1 Tales From The Treehouse video, this time looking into
            the brilliant, yet at times comical, pioneering tech development
            behind McLaren elite human performance program.
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
export default Third
