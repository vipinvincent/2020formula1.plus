import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=b7gt9P-gdKM'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/b7gt9P-gdKM/sddefault.jpg'
              alt='Whats Inside a $5000 F1 Helmet?'
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
            href='https://www.youtube.com/watch?v=b7gt9P-gdKM'
            target='_blank'>
            What's Inside a $5000 F1 Helmet?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            F1 Helmets have to be unbelievably strong to protect the driver's
            head at over 200mph and resist high speed impacts. So today we are
            going to cut one open and see how they are constructed to be so
            strong, impact resistant and still extremely light. I take my
            F1-grade helmet that I've been using for the last 8 years and cut it
            open. We examine the carbon fibre lay-up as well as how it's
            constructed to pass the various rigorous safety standards. Such as a
            projectile being shot at it at over 250kph and being heated to over
            700ºC!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://driver61.com/' target='_blank'>
              Driver61
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
