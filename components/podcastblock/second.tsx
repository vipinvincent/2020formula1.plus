import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=xaSS9r9KVDs'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/xaSS9r9KVDs/sddefault.jpg'
              alt='VERSTAPPEN CRUSHES MERCEDES! 70th Anniversary GP Podcast'
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
            href='https://www.youtube.com/watch?v=xaSS9r9KVDs'
            target='_blank'>
            HAS HAMILTON WON THE TITLE ALREADY? | 2020 Spanish GP Podcast
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Unbiased Formula 1 Podcast is a podcast channel summarising all
            the big talking points from the latest #F1 race - with in depth
            reaction and discussion into what happened, both on and off track.
            Subscribe for more!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/channel/UCiMPcmFo6sMsZOWvlLCz0YQ'
              target='_blank'>
              Unbiased Formula 1 Podcast
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
