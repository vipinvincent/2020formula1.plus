import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=iVm3-nxdt2U'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/iVm3-nxdt2U/sddefault.jpg'
              alt='Why Hamiltons hinted at leaving F1 after 2020'
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
            href='https://www.youtube.com/watch?v=iVm3-nxdt2U'
            target='_blank'>
            Why Hamilton's hinted at leaving F1 after 2020
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Could Lewis Hamilton really walk away from Formula 1 at the end of
            this season, or will “no guarantee” that he continues in 2021 turn
            into a new Mercedes deal after all? All expectations points towards
            the latter but Hamilton’s comments in the wake of his Emilia Romagna
            Grand Prix victory, coupled with the fact the six-time world
            champion is still unemployed for next season with only four races of
            2020 remaining, mean the prospect of an abrupt end to his F1 career
            does have the smallest of chances of being realised. In this video
            we explore the world champion's comments, what Mercedes had to say
            about them, and ponder what reasons could be behind Hamilton’s
            contract delay.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/gasly-to-stay-at-alphatauri-last-red-bull-hope-extinguished/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
