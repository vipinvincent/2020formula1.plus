import React from 'react'
import YouTube from 'react-youtube'
import ContentLink from 'components/link/ContentLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='rounded-tl-xxl text-left pb-2'>
        <div className='rounded-tl-xxl youtube'>
          <YouTube videoId='ti39GzTi2Us' className='w-full h-82 md:h-48' />
        </div>
        <div className='px-2 py-2'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Podcast
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=ti39GzTi2Us'
            target='_blank'>
            2020 Styrian GP Race Review | WTF1 Podcast
          </ContentLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            F1 returned once again to the Red Bull Ring for the Styrian GP. What
            is happening to Ferrari? Why was Alex Albon so slow? All and more
            will be discussed with Matt & Tommy.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Courtesy{' '}
            <ContentLink href='https://wtf1.com/' target='_blank'>
              wtf1.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
