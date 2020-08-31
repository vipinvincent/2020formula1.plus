import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=9Ts9SW2Dj84'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/9Ts9SW2Dj84/sddefault.jpg'
              alt='What Next For Ferrari After Spa Slump? | 2020 Belgian Grand Prix'
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
            href='https://www.youtube.com/watch?v=9Ts9SW2Dj84'
            target='_blank'>
            What Next For Ferrari After Spa Slump? | 2020 Belgian Grand Prix
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Analysis of Ferrari's struggles at Spa and where the team goes from
            here after a difficult weekend for the Scuderia in Belgium...
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.formula1.com' target='_blank'>
              Formula1.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
