import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=Z_n39BfqITA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/Z_n39BfqITA/sddefault.jpg'
              alt='Preparing for Portimão: Mike Talks Tyres, Tarmac, Set-Up and Simulations!'
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
            href='https://www.youtube.com/watch?v=Z_n39BfqITA'
            target='_blank'>
            Preparing for Portimão: Mike Talks Tyres, Tarmac, Set-Up and
            Simulations!
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Bitumen. Asphalt. Vehicle Dynamics. We're geeking out about F1 tyres
            with Mike, learning all about the crazy amount of work that goes
            into preparing for racing at a new track!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.mercedesamgf1.com' target=' _blank'>
              Mercedes-AMG Petronas F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
