import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=D9FSyFEJYvA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/D9FSyFEJYvA/sddefault.jpg'
              alt='How F1s new team can succeed where Renault failed'
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
            href='https://www.youtube.com/watch?v=D9FSyFEJYvA'
            target='_blank'>
            How F1’s ‘new’ team can succeed where Renault failed
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Renault F1 Team will be no-more after 2020. Fortunately, unlike
            the last time Renault took its name down from above the door at the
            Enstone factory, this time it will retain ownership, but next year
            it will be rebranded as Alpine. Why is it doing that, what does it
            all mean, and perhaps most importantly what is Alpine? Scott
            Mitchell explores the thinking behind this decision, looking at why
            a niche brand may be a better identity for the team, and how the way
            F1 is set up for the future could make this a good time for a change
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
export default Third
