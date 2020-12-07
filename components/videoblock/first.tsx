import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=4BgICCdV68k'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/4BgICCdV68k/sddefault.jpg'
              alt='Should Mercedes replace Bottas with Russell for F1 2021?'
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
            href='https://www.youtube.com/watch?v=4BgICCdV68k'
            target='_blank'>
            Should Mercedes replace Bottas with Russell for F1 2021?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            George Russell’s stunning debut F1 weekend with Mercedes ended in
            heartbreak, but it can only have boosted his long-term career
            prospects. A call-up to Mercedes for 2022 seems inevitable, but
            should the team be looking to get the young Brit in the car sooner
            than that? Scott Mitchell joins Glenn Freeman to discuss the case
            for Russell, what his performance means for Bottas, and if Mercedes
            is even open to the idea of making an unexpected switch ahead of
            schedule
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/should-mercedes-swap-russell-and-bottas-for-2021-our-verdict/'
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
