import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=kv56dw3v3M8'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/kv56dw3v3M8/sddefault.jpg'
              alt='Why any new F1 team has to pay $200million to the current grid to enter'
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
            href='https://www.youtube.com/watch?v=kv56dw3v3M8'
            target='_blank'>
            Why any new F1 team has to pay $200million to the current grid to
            enter
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Under the terms of F1's new Concorde Agreement, any new team wanting
            to enter F1 now has to pay $200million which will then be shared
            evenly amongst the 10 existing entries. In this video Scott Mitchell
            explains the thinking behind the move, and how it is designed to
            prevent 'chancers' trying to join F1, as well as offering more
            protection to the current teams in a US sports-style franchise
            model.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/new-f1-squads-must-now-pay-existing-teams-200m-to-enter/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
