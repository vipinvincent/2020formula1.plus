import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=t8_ntaH5nvM'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/t8_ntaH5nvM/sddefault.jpg'
              alt='Carlos Sainz Has Fallen Under The Radar AGAIN'
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
            href='https://www.youtube.com/watch?v=t8_ntaH5nvM'
            target='_blank'>
            Carlos Sainz Has Fallen Under The Radar AGAIN
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            After a troubled start to the 2020 F1 season, Sainz's luck has been
            slowly but surely showing his class and why Ferrari picked him. His
            championship position is not representative of the great job he has
            done all year long. Here, we take a look back at some of those
            unlucky moments that have plagued his season and how he has dealt
            with it up to now.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/BMPHF1/'
              target='_blank'>
              BMPHF1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
