import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=y3SSeS6sHG0'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/y3SSeS6sHG0/sddefault.jpg'
              alt='The Secret To Hamiltons F1 Success'
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
            href='https://www.youtube.com/watch?v=y3SSeS6sHG0'
            target='_blank'>
            The Secret To Hamilton's F1 Success
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton is now the winningest F1 driver of all time. He has
            more victories and more pole positions than any other driver in
            history; and it seems almost inevitable that he will go on to beat
            the seven title record that he shares with Michael Schumacher.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.autosport.com/' target='_blank'>
              Autosport
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
