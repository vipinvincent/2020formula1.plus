import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=SWSfgS0R1Ms'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/SWSfgS0R1Ms/sddefault.jpg'
              alt='Why Red Bull Still Believe Verstappen Can Win The Title'
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
            href='https://www.youtube.com/watch?v=SWSfgS0R1Ms'
            target='_blank'>
            Why Red Bull Still Believe Verstappen Can Win The Title
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            After his heroics at the 70th Anniversary GP, Red Bull’s Max
            Verstappen reduced the gap to championship leader Lewis Hamilton.
            Red Bull advisor Helmut Marko is of the opinion that they can
            realistically overcome the gap to Hamilton and still be able to
            crown Max Verstappen as the youngest F1 champion ever
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/FormulaWorld/'
              target='_blank'>
              Formula World
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
