import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=e2ah3xt_TxA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/e2ah3xt_TxA/sddefault.jpg'
              alt='Hiding In Plain Sight: The Secret Behind Sainz s Magical 2019 F1 Season'
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
            href='https://www.youtube.com/watch?v=e2ah3xt_TxA'
            target='_blank'>
            Hiding In Plain Sight: The Secret Behind Sainz's Magical 2019 F1
            Season
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Why is Carlos Sainz being beaten by Lando Norris in 2020? Why did I
            think this in the season predictions? In this video I lay out all
            the data that proved this was a long time coming. Sainz is
            phenomenal, but the data had a secret.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/CrankyYankeeF1/'
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
