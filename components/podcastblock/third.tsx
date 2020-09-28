import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=Uh5KP5y5XtQ'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/Uh5KP5y5XtQ/sddefault.jpg'
              alt='Russian Grand Prix Review - Bottas wins as Hamilton picks up controversial penalty'
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
            href='https://www.youtube.com/watch?v=Uh5KP5y5XtQ'
            target='_blank'>
            Russian Grand Prix Review - Bottas wins as Hamilton picks up
            controversial penalty
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Russian Grand Prix – Mercedes’ Valtteri Bottas has taken an easy win
            at the Sochi Autodrom, after time penalties prevented from Lewis
            Hamilton from challenging.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://formulaspy.com/f1' target='_blank'>
              Thomas Maher
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
