import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=PMhBVq2QpJU'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/PMhBVq2QpJU/sddefault.jpg'
              alt='Mark Webber On Vettel Battles, Flying Crashes And More | F1 Unscripted | Heineken Non-Race Sundays'
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
            href='https://www.youtube.com/watch?v=PMhBVq2QpJU'
            target='_blank'>
            How to Master the SPA F1 Track! | Nico Rosberg
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            My next F1 Fridays episode! We are back on one of the most legendary
            F1 tracks: Spa-Francorchamps! The Belgian Grand Prix and the Spa F1
            Track are just epic! Check out my in-depth analysis of the 2020
            Belgian Grand Prix track – of course also showing how to master Eau
            Rouge! Here I share the F1 drivers’ secrets on how to master the
            Belgian F1 track. Of course, followed by a hot lap and my F1 Fan Q&A
            – answering your questions about the 2020 Belgian GP weekend.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.nicorosberg.com' target='_blank'>
              Nico Rosberg
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
