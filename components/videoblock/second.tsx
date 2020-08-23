import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=2TiWzVK8NLc'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/2TiWzVK8NLc/sddefault.jpg'
              alt='F1 News: Why Hulkenberg Wouldnt Be Interested in Joining Haas'
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
            href='https://www.youtube.com/watch?v=2TiWzVK8NLc'
            target='_blank'>
            Why Hulkenberg Wouldn't Be Interested in Joining Haas
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Former F1 driver Nico Hulkenberg recently impressed many in F1 by
            the manner in which he fulfilled his stand-in duties at Racing Point
            for two races while regular driver Sergio Perez was recovering from
            the coronavirus. This in the eyes of many made the possibility of a
            full-time return for Hulkenberg in 2021 all the more plausible. One
            of the teams being touted as a possibility is Haas. Haas’ team
            principal Gunther Steiner has now weighed in on this.
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
