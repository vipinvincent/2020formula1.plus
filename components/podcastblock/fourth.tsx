import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=fzqeQZaBcaU'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/fzqeQZaBcaU/sddefault.jpg'
              alt='F1 Engine Modes EXPLAINED!'
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
            href='https://www.youtube.com/watch?v=fzqeQZaBcaU'
            target='_blank'>
            F1 Engine Modes EXPLAINED!
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            This weekend we say goodbye to 'Party Mode' forever... Ahead of the
            introduction of the new Technical Directive restricting engine
            modes, we asked Hywel - Managing Director at HPP - to explain just
            how they work and how the new ruling might effect performance up and
            down the grid! 🧠
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.mercedesamgf1.com/en/'
              target='_blank'>
              Mercedes-AMG Petronas Formula One Team
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
