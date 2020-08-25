import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=7mRU9MmQMm0'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/7mRU9MmQMm0/sddefault.jpg'
              alt='8 things Williamss new owners need to do next'
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
            href='https://www.youtube.com/watch?v=7mRU9MmQMm0'
            target='_blank'>
            8 things Williams's new owners need to do next
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Williams secured its Formula 1 future by selling up to US investment
            firm Dorilton Capital, but that hard work really starts now. In this
            video we highlight the key areas the new owners should focus on if
            it wants to turn Williams back into a credible player on the F1
            grid, and to make sure it takes advantage of the rule changes coming
            in for 2022.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/eight-things-williams-needs-to-do-next/'
              target='_blank'>
              The race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
