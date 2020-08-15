import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=Dl0Mq0GnGyE'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/Dl0Mq0GnGyE/sddefault.jpg'
              alt='FP1 Post Podium Podcast Episode 5: 70th Anniversary Grand Prix'
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
            href='https://www.youtube.com/watch?v=Dl0Mq0GnGyE'
            target='_blank'>
            How Bad is Roy Nissany?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            In FP1 of the 2020 Formula One Spanish Grand Prix Roy Nissany made
            his debut for the Williams F1 team, having been announced as part of
            their junior programme back at the start of the year. But who
            actually is this guy and does he deserve this chance given the likes
            of W Series Champion and fellow Williams Junior Driver Jamie
            Chadwick has had no such opportunity?
          </p>

          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/channel/UCihjJgRm3Th-quKmTW-9AwQ'
              target='_blank'>
              FP1 - Formula Podcast One
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
