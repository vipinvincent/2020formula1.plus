import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=nDtqD12thcA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/nDtqD12thcA/sddefault.jpg'
              alt='The Weird Sequence Of Events That Derailed Lewiss Race'
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
            href='https://www.youtube.com/watch?v=nDtqD12thcA'
            target='_blank'>
            The Weird Sequence Of Events That Derailed Lewis's Race
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            After a poor start to the race for Mercedes’ Valtteri Bottas,
            teammate Lewis Hamilton seemed all set to cruise to another victory.
            However, a retirement for Haas driver Kevin Magnussen just before
            the pit entry bought out the safety car. Lewis Hamilton chose to pit
            but it was soon revealed that he had done so while the pit lane was
            closed. This earned him a race-ruining stop-go penalty. Team
            principal Toto Wolff has now gone into the details of what many saw
            as a rare mistake from the championship leaders
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://formula.world/' target='_blank'>
              Formula World
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
