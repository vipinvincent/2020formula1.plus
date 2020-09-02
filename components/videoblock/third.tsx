import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=_Ps1tJpyQEs'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/_Ps1tJpyQEs/sddefault.jpg'
              alt='Why Ferrari has upped the stakes in its F1 row with Racing Point'
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
            href='https://www.youtube.com/watch?v=_Ps1tJpyQEs'
            target='_blank'>
            Why Ferrari has upped the stakes in its F1 row with Racing Point
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari stands alone as the only team still challenging Racing
            Point’s punishment for its illegally-designed brake ducts on its
            ‘Pink Mercedes’, and after the Belgian Grand Prix it announced its
            intention to also contest the reprimand the team receives after each
            race as part of its punishment. But why is Ferrari still upset when
            the other teams that were on its side decided to back away? In this
            video we explain the end game behind Ferrari’s appeals, and the
            other rules around customer car parts that it is hoping to get
            changed
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/ferrari-appeals-racing-point-brake-duct-reprimand/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
