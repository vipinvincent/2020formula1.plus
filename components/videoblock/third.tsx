import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=8tbnCm8itlg'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/8tbnCm8itlg/sddefault.jpg'
              alt='How Did The Cold Affect F1s Nürburgring Race?'
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
            href='https://www.youtube.com/watch?v=8tbnCm8itlg'
            target='_blank'>
            How Did The Cold Affect F1's Nürburgring Race?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            For the first time in 7 years, F1 finally returned to a frosty
            Nürburgring for the Eifel GP. Out came the bobble hats, and teams
            like Ferrari, McLaren and more even brought out some upgrades...
            though the jury is still out whether they were beneficial or not.
            Despite this, it's the midfield battle where things were really
            heating up, with Renault, Racing Point and McLaren all battling it
            out for 3rd place. But how did the cold weather affect the teams in
            reality? Jake Boxall-Legge uses our latest 3D animation to take a
            look at the cold weekend, the tech updates brought out and more.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href=' https://www.autosport.com/' target='_blank'>
              Autosport
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
