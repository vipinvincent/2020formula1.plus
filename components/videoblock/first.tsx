import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=U_je9S6z1fI'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/U_je9S6z1fI/sddefault.jpg'
              alt='How Grosjean survived fireball Bahrain F1 crash that split his car in two'
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
            href='https://www.youtube.com/watch?v=U_je9S6z1fI'
            target='_blank'>
            How Grosjean survived fireball Bahrain F1 crash that split his car
            in two
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Romain Grosjean escaped from one of the scariest F1 crashes in
            recent memory in the 2020 Bahrain Grand Prix, when his Haas car
            pierced the barriers and split in half as it caught fire after a
            137mph impact. In this video we explain what we know about the
            crash, how Grosjean climbed out of the wreckage, and the key factors
            that enabled him to survive an accident that surely would have
            resulted in a fatality just a few years ago
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/grosjeans-injuries-only-hand-burns-after-137mph-impact/'
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
