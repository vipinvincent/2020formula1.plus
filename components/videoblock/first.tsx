import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=HGJle7mRAFY'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/HGJle7mRAFY/sddefault.jpg'
              alt='The key clues from Alonsos first test of his F1 comeback'
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
            href='https://www.youtube.com/watch?v=HGJle7mRAFY'
            target='_blank'>
            The key clues from Alonso's first test of his F1 comeback
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Fernando Alonso drove Renault’s 2020 F1 car in a filming day at
            Barcelona to step up his preparation for a third stint with the team
            in 2021. In this video Scott Mitchell gives details of what Alonso
            said after the test, including how quickly he felt up to speed after
            nearly two years away, what will be the next steps of his work to
            get ready for 2021, how he’s working with the team already on race
            weekends, and how his ambitions for his first season back appear to
            be changing now Renault’s form is improving
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/the-small-clues-from-alonsos-first-renault-test/'
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
