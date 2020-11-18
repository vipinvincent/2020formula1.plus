import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=RmAZkBD4y10'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/RmAZkBD4y10/sddefault.jpg'
              alt='Has Hamilton Silenced The Car VS Driver Debate? With Paddy Lowe'
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
            Podcast
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=RmAZkBD4y10'
            target='_blank'>
            Has Hamilton Silenced The Car VS Driver Debate? With Paddy Lowe
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            After securing his 7th World Championship in dominant fashion, many
            now feel Lewis Hamilton is the greatest F1 driver of all time.
            However, some still argue that his success has only come from being
            in the best car. Jon Noble and Luke Smith are joined by former
            Mercedes F1 team Technical Director, Paddy Lowe, to discuss if
            Hamilton is really the difference-maker.
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
export default Second
