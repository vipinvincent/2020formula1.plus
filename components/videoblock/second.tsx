import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=UtQ2zISb7So'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/UtQ2zISb7So/sddefault.jpg'
              alt='F1 Wheelbases | Merc go long, Red Bull go short'
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
            href='https://www.youtube.com/watch?v=UtQ2zISb7So'
            target='_blank'>
            F1 Wheelbases | Merc go long, Red Bull go short
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Why do some teams choose to make their cars so long and others
            prefer a shorter car? What difference does it make?
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://chainbear.me/' target='_blank'>
              Chain Bear
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
