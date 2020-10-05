import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=K1KSESCdxkM'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/K1KSESCdxkM/sddefault.jpg'
              alt='Why Hondas leaving F1 and what it means for Verstappen'
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
            href='https://www.youtube.com/watch?v=K1KSESCdxkM'
            target='_blank'>
            Why Honda's leaving F1 and what it means for Verstappen
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Honda will withdraw from Formula 1 at the end of the 2021 season,
            leaving Red Bull without an engine partner and putting the team’s
            rivals on full alert regarding its lead driver Max Verstappen. But
            why now? And what will the consequences be? Scott Mitchell explains
            the full seismic story in this video - let us know your thoughts on
            what the next steps for Red Bull and Verstappen should be in the
            comments below.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://the-race.com/formula-1/' target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
