import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=RFCLiJ6pDbA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/RFCLiJ6pDbA/sddefault.jpg'
              alt='Sebastian Vettel says Ferrari had nothing to lose by staying out on Softs'
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
            href='https://www.youtube.com/watch?v=RFCLiJ6pDbA'
            target='_blank'>
            Sebastian Vettel says Ferrari had 'nothing to lose' by staying out
            on Softs
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari’s Sebastian Vettel says he had ‘nothing to lose’ by staying
            out to try getting to the end on an old set of Soft tyres. Vettel
            came home in P7 in Sunday’s Spanish Grand Prix, after a strategic
            roll of the dice after an apparent breakdown in communication
            between Ferrari and Vettel.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.formulaspy.com' target='_blank'>
              Thomas Maher
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
