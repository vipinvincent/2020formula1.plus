import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=voNvx0bT680'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/voNvx0bT680/sddefault.jpg'
              alt='Verstappen Doubts Hamilton Will Join Red Bull and Domenicali Becomes New F1 Boss '
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
            href='https://www.youtube.com/watch?v=voNvx0bT680'
            target='_blank'>
            Verstappen Doubts Hamilton Will Join Red Bull and Domenicali Becomes
            New F1 Boss
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            In this weeks’ F1 news round-up: Max Verstappen brushes off comments
            made by Eddie Jordan that Lewis Hamilton should join Red Bull,
            Guenther Steiner says Haas signing Sergio Perez isn’t a given and
            Stefano Domenicali is set to become Formula One’s new CEO. Plus, a
            look at the Friday practice results, Lance Stroll hints at Aston
            Martin’s new livery and drivers are against reverse-grid races.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/TheF1Word/'
              target='_blank'>
              The F1 Word
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
