import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=6p3jPbKexyk'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/6p3jPbKexyk/sddefault.jpg'
              alt='Lewis Hamilton on new contract talks, battling racism & being described as the G.O.A.T'
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
            Interview
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=6p3jPbKexyk'
            target='_blank'>
            Lewis Hamilton on new contract talks, battling racism & being
            described as the G.O.A.T
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton sat down with Karun Chandhok to discuss his victory
            at the British Grand Prix, driving without crowds, his battle with
            racism and whether there have been talks over a new Mercedes
            contract. Hamilton also reacts to being described as the 'Greatest
            of all Time'.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.skysports.com/f1' target='_blank'>
              skysports.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
