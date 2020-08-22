import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=2QN1UbiOAAk'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/2QN1UbiOAAk/sddefault.jpg'
              alt='F1 News: Perez Addresses Speculation Over His Seat for 2021'
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
            href='https://www.youtube.com/watch?v=2QN1UbiOAAk'
            target='_blank'>
            Perez Addresses Speculation Over His Seat for 2021
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            One of the most persistent rumours of recent times has been that
            current Ferrari driver Sebastian Vettel will be signed by Racing
            Point next year and that he will take current driver Sergio Perez’s
            place. Nothing has been confirmed or denied by the team yet but
            Sergio Perez has now opened up about it all.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/FormulaWorld'
              target='_blank'>
              Formula World
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
