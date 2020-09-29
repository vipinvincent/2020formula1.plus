import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=WoWZdRjSnpM'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/WoWZdRjSnpM/sddefault.jpg'
              alt='What Hamiltons team ownership move tells us about his career after F1The U-turn that keeps Hamilton clear of a race ban - for now'
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
            href='https://www.youtube.com/watch?v=WoWZdRjSnpM'
            target='_blank'>
            The U-turn that keeps Hamilton clear of a race ban - for now
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton edged closer to a one-race ban in a controversial
            Russian Grand Prix ruined by two time penalties he earned for
            something that happened before the race even started. The Mercedes
            driver's pre-race antics set him on a collision course with the
            officials. In this video Scott Mitchell explains what Hamilton did
            wrong, how close it took him to a suspension, and why the stewards
            performed a U-turn on the most controversial part of their decision.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/why-fia-went-back-on-inappropriate-hamilton-penalty-points/'
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
