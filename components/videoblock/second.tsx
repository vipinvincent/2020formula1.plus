import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=DPWIC2S7avU'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/DPWIC2S7avU/sddefault.jpg'
              alt='How Ferrari woe adds more gloom for F1 2020’s unluckiest driver'
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
            href='https://www.youtube.com/watch?v=DPWIC2S7avU'
            target='_blank'>
            How Ferrari woe adds more gloom for F1 2020’s unluckiest driver
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Belgian Grand Prix was a miserable experience for Ferrari’s
            Formula 1 drivers. Even the one who doesn’t race for Ferrari yet.
            Carlos Sainz Jr didn't even start the race at Spa, yet he still
            managed to match his 2021 team’s points haul from the weekend, as
            both Ferrari drivers went the distance but failed to finish in the
            top 10. Sainz is saying farewell to McLaren at the end of 2020 as
            he’s been afforded the opportunity of his career by replacing
            Sebastian Vettel at Ferrari from 2021. Or at least that’s how it
            looked on paper. Now he faces a nervous few months observing from
            afar in the hope that Ferrari can start to turn things around before
            his arrival
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/category/formula-1/'
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
