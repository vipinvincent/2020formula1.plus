import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=xJ6oiu7hYL4'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/xJ6oiu7hYL4/sddefault.jpg'
              alt='Why F1s 2021 rule changes are bigger than you think'
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
            href='https://www.youtube.com/watch?v=xJ6oiu7hYL4'
            target='_blank'>
            Why F1's 2021 rule changes are bigger than you think
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            F1's major rule changes for the cars have been pushed back to 2022,
            and the current cars are being carried over for 2021... right? Sort
            of. Rule changes are still being made for next year, and in this
            video Edd Straw explains what they are, and why the FIA has felt the
            need to try to curb the performance of the fastest F1 cars ever. We
            also round up the other minor changes on and off-track that are
            being made for next season.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://the-race.com/formula-1/' target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
