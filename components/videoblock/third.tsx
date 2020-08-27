import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=5qBlnjSBRmA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/5qBlnjSBRmA/sddefault.jpg'
              alt='Is Sebastian Vettel about to sign for Racing Point?'
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
            href='https://www.youtube.com/watch?v=5qBlnjSBRmA'
            target='_blank'>
            Is Sebastian Vettel about to sign for Racing Point?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Four-time Formula One World Champion Sebastian Vettel is on the cusp
            of a switch from red to pink, with rumours rife that the 33-year-old
            will sign a contract with Racing Point in Belgium to lock him in at
            the soon-to-be Aston Martin works squad on a three-year deal from
            2021.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='The Inside Line' target='_blank'>
              http://theinsideline.com/
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
