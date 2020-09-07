import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=Z9ZA2wa9h4o'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/Z9ZA2wa9h4o/sddefault.jpg'
              alt='Ted reveals who at Mercedes knew the pitlane was shut & speaks to Pierre Gasly! | The Notebook Italy'
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
            href='https://www.youtube.com/watch?v=Z9ZA2wa9h4o'
            target='_blank'>
            Ted reveals who at Mercedes knew the pitlane was shut & speaks to
            Pierre Gasly! | The Notebook Italy
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ted Kravitz brings you all the news and views from the paddock
            following a dramatic Italian Grand Prix. Ted reveals who from the
            Mercedes team spotted that the pit-lane had shut (but too late for
            Lewis Hamilton), what the mood was like in the Williams garage as
            Claire Williams departs F1, and speaks to surprise race winner
            Pierre Gasly!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.skysports.com/f1' target='_blank'>
              Sky Sports F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
