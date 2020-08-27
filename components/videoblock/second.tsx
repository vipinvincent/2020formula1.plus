import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=XT8yoJ3deRQ'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/XT8yoJ3deRQ/sddefault.jpg'
              alt='Haas Explain Why They Decided to Stay in F1'
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
            href='https://www.youtube.com/watch?v=XT8yoJ3deRQ'
            target='_blank'>
            Haas Explain Why They Decided to Stay in F1
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The future of the Haas F1 team was supposedly on shaky ground as it
            was unsure if team owner Gene Haas would want to continue in F1
            after the team’s poor string of results in recent times. However,
            they have signed the new Concorde Agreement which commits them to F1
            for the next five years. Team principal Gunther Steiner has now gone
            into the details of the reasons behind this decision.
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
