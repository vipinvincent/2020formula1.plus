import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=7R1-ONZ0VAA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/7R1-ONZ0VAA/sddefault.jpg'
              alt='2020 Belgian Grand Prix l What You Need To Know'
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
            href='https://www.youtube.com/watch?v=7R1-ONZ0VAA'
            target='_blank'>
            2020 Belgian Grand Prix l What You Need To Know
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            A Formula 1 fans guide to the 2020 Belgian Grand Prix - In this
            video you'll get a breakdown of storylines coming in, what to watch
            for, and official predictions as well an invitation to add your
            predictions in the CYF1 prediction league.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/CrankyYankeeF1'
              target='_blank'>
              CrankyYankeeF1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
