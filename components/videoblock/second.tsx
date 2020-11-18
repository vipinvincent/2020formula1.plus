import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=R229xcKOJGA'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/R229xcKOJGA/sddefault.jpg'
              alt='The vicious circle that trapped Vettel and how he briefly escaped'
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
            href='https://www.youtube.com/watch?v=R229xcKOJGA'
            target='_blank'>
            The vicious circle that trapped Vettel and how he briefly escaped
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Sebastian Vettel's 2020 F1 season has been mostly miserable so far,
            but he was briefly released from that downward spiral at the Turkish
            Grand Prix, where he put in an accomplished performance to take an
            unexpected podium finish. In this video Scott Mitchell explains
            what's been going wrong for Vettel this year, leaving him trapped
            with no obvious way out, and why he was able to take advantage of
            the circumstances at Istanbul Park to get a brief release from his
            problems.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/the-immediate-division-over-f1s-driver-salary-cap-proposal/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
