import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=-9Mg4pjo7k0'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/-9Mg4pjo7k0/sddefault.jpg'
              alt='2020 Spanish GP Race Review | WTF1 Podcast'
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
            href='https://www.youtube.com/watch?v=-9Mg4pjo7k0'
            target='_blank'>
            2020 Spanish GP Race Review | WTF1 Podcast
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Spain may have been a pretty boring race but that doesn’t stop Matt
            & Tommy from discussing some of the hot topics from the 2020 F1
            Spanish Grand Prix! We discuss Leclerc driving around with no
            seatbelt, Vettel falling out with Ferrari and much more!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.wtf1.com' target='_blank'>
              wtf1.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
