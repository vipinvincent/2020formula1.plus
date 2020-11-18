import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=KBzAARLgxec'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/KBzAARLgxec/sddefault.jpg'
              alt='Hamilton is an all-time great | Nico Rosberg congratulates his ex-Mercedes team-mate'
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
            href='https://www.youtube.com/watch?v=KBzAARLgxec'
            target='_blank'>
            'Hamilton is an all-time great' | Nico Rosberg congratulates his
            ex-Mercedes team-mate
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Former F1 world champion Nico Rosberg says ex-Mercedes team-mate
            Lewis Hamilton is now an all-time great after winning a
            record-equalling seventh world title.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.skysports.com/f1/' target='_blank'>
              Sky Sports F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
