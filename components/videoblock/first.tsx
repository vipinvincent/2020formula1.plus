import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=ovpD_ET8VUw'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/ovpD_ET8VUw/sddefault.jpg'
              alt='What putting a Ferrari man in charge means for F1'
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
            href='https://www.youtube.com/watch?v=ovpD_ET8VUw'
            target='_blank'>
            What putting a 'Ferrari man' in charge means for F1
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ex-Ferrari team boss Stefano Domenicali is set to replace Chase
            Carey as the CEO of Formula 1. The upcoming move will mark a return
            to the championship for Domenicali, who walked away from Ferrari in
            2014 and has since held roles at Audi and Lamborghini among others.
            In this video Scott Mitchell looks at what Domenicali will bring to
            the role, how he will differ from his predecessor Carey, what he can
            achieve alongside his old Ferrari colleague Ross Brawn, and if
            anyone should be concerned about a self-confessed "Ferrari man"
            being in charge of F1 itself.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/racing-point-moves-away-from-mercedes-design-with-upgrades/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
