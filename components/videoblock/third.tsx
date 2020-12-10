import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=iAw-wYl1fXU'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/iAw-wYl1fXU/sddefault.jpg'
              alt='F1s Updated 2021 Rules Explained - Everything You Need To Know'
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
            href='https://www.youtube.com/watch?v=iAw-wYl1fXU'
            target='_blank'>
            F1's Updated 2021 Rules Explained - Everything You Need To Know
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The 2021 F1 season is closing in, and while it might not be the
            massive overhaul we expected, now delayed till 2022, there are still
            some very interesting updates to the regulations coming into play.
            Jake Boxall-Legge takes a look at how the FIA's new Formula 1 rules
            will affect racing in 2021, from car aerodynamics to fuel usage, to
            copycat teams and even green materials.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.autosport.com/' target='_blank'>
              Autosport
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
