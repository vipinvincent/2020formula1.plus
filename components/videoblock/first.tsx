import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=pu0YOjpe8i4'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/pu0YOjpe8i4/sddefault.jpg'
              alt='The answers F1 needs as Grosjean crash investigation begins'
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
            href='https://www.youtube.com/watch?v=pu0YOjpe8i4'
            target='_blank'>
            The answers F1 needs as Grosjean crash investigation begins
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The formal investigation into Romain Grosjean’s fireball crash at
            the start of the Bahrain Grand Prix will take six to eight weeks
            before F1’s governing body the FIA will release its findings. As
            that investigation begins, Scott Mitchell explains how the process
            will work, and highlights the key questions that need answering
            based on what we know about the accident and its aftermath so far.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/grosjean-crash-investigation/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
