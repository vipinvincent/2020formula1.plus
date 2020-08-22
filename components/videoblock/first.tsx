import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=Dn0FXsqfMbM'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/Dn0FXsqfMbM/sddefault.jpg'
              alt='F1’s new team payment deals explained'
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
            href='https://www.youtube.com/watch?v=Dn0FXsqfMbM'
            target='_blank'>
            F1’s new team payment deals explained
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            All 10 Formula 1 teams have signed up to the new Concorde Agreement,
            committing them to the championship from 2021-2025. The aim of the
            new contracts between F1 and the teams was primarily to fix the
            flawed financial deals that were in place before, which guaranteed
            the top teams swept up too much of the money, making it almost
            impossible for the rest to catch up. In this video Scott Mitchell
            explains how the new deals are structured, including the terms of
            new, smaller bonuses for the bigger or long-standing teams, and
            better rewards for the rest in a more even distribution of F1’s cash
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/who-wins-from-f1s-new-concorde-deal-and-how-itll-work/'
              target='_blank'>
              The race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
