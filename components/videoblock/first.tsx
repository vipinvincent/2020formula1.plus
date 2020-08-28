import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=oiZ2Y-upqzs'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/oiZ2Y-upqzs/sddefault.jpg'
              alt='Formula 1 to honour Anthoine Hubert at Belgian Grand Prix '
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
            href='https://www.youtube.com/watch?v=oiZ2Y-upqzs'
            target='_blank'>
            Formula 1 to honour Anthoine Hubert at Belgian Grand Prix
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Formula 1 and Formula 2 will both pay tribute to the late Anthoine
            Hubert on the anniversary of his death this weekend. French racing
            driver Anthoine Hubert lost his life in a Formula 2 race at
            Spa-Francorchamps during the 2019 Belgian Grand Prix weekend, with
            the 23 year old succumbing to injuries he suffered in a collision
            between himself and Juan Manuel Correa.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href=' http://www.formulaspy.com' target='_blank'>
              Thomas Maher
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
