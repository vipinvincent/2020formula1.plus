import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=MG4sc55Tjgo'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/MG4sc55Tjgo/sddefault.jpg'
              alt='Why Are Red Bull Still Supporting Albon?'
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
            href='https://www.youtube.com/watch?v=MG4sc55Tjgo'
            target='_blank'>
            Why Are Red Bull Still Supporting Albon?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull’s Alex Albon has been underperforming in comparison to his
            teammate Max Verstappen. Yet, Red Bull who are seen by many as a
            team with the propensity for changing drivers mid-season, have been
            patient with Albon and team principal Christian Horner recently
            reaffirmed that they are still behind him. Horner has now explained
            why that is case.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/FormulaWorld'
              target='_blank'>
              Formula World
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
