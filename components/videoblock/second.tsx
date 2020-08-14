import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=zR3r-uKIJt0'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/zR3r-uKIJt0/sddefault.jpg'
              alt='RACE PREVIEW: 2020 Formula 1 Spanish Grand Prix'
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
            href='https://www.youtube.com/watch?v=zR3r-uKIJt0'
            target='_blank'>
            RACE PREVIEW: 2020 Formula 1 Spanish Grand Prix
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Spain’s Circuit de Barcelona-Catalunya is a welcome sight for F1
            teams, drivers and fans, with the Montmeló circuit annually
            providing a first taste of the competitive order in pre-season
            testing. But this year’s Spanish Grand Prix will no doubt feel more
            test than race given the event will be yet another held behind
            closed doors. Watch the video, and tell us what you think in the
            comments…
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://theinsideline.com/ ' target='_blank'>
              The Inside Line
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
