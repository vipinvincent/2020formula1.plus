import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=EbkD6jDh_3c'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/EbkD6jDh_3c/sddefault.jpg'
              alt='7 Of The Biggest F1 Punishments'
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
            Q & A
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=EbkD6jDh_3c'
            target='_blank'>
            The 382728 Sub 'Q and A' Spectacular
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            How can the FIA change engine mode rules mid season? Which driver
            has surprised/disappointed? How long until Spain is off the
            calendar? Should the FIA vet team sponsors? Who will benefit from
            2022 rules?....
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.chainbear.me' target='_blank'>
              Chain Bear
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
