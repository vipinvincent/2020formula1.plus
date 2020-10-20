import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=4Ud4x--_erA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/4Ud4x--_erA/sddefault.jpg'
              alt='Why Renault took so long to get an F1 podium'
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
            href='https://www.youtube.com/watch?v=4Ud4x--_erA'
            target='_blank'>
            Why Renault took so long to get an F1 podium
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            When Renault returned to F1 as a works team in 2016 it declared it
            had a five-year plan to become a title contender. 2020 is year five
            of its comeback, and it’s only just taken its first podium. In this
            video Edd Straw explains why Renault has struggled to become a
            frontrunner in F1 again, and the mistakes it made along the way that
            also set it back
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/what-ricciardos-breakthrough-podium-really-says-about-renault/'
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
