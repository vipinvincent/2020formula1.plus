import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=rse-NNabpkI'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/rse-NNabpkI/sddefault.jpg'
              alt='Is Max Verstappens talent being wasted at Red Bull?'
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
            href='https://www.youtube.com/watch?v=rse-NNabpkI'
            target='_blank'>
            Is Max Verstappen's talent being wasted at Red Bull?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Max Verstappen is undoubtedly one of the most gifted drivers to ever
            race in the Formula One World Championship. The 22-year-old Dutchman
            is now an experienced assassin, and as a nine-time Grand Prix winner
            is more than ready to challenge for the title.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://unbeaten.com/formula1' target='_blank'>
              Unbeaten F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
