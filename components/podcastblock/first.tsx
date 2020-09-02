import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=PtQ1Ejp6dbY'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/PtQ1Ejp6dbY/sddefault.jpg'
              alt='F1 Nation: Jody Scheckter on Ferrari crisis and Andreas Seidl on learning from Bayern Munich'
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
            href='https://www.youtube.com/watch?v=PtQ1Ejp6dbY'
            target='_blank'>
            F1 Nation: Jody Scheckter on Ferrari crisis and Andreas Seidl on
            learning from Bayern Munich
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            This week we're joined by 1979 champion Jody Scheckter to hear about
            Ferrari's crisis in 1980, before McLaren team principal Andreas
            Seidl drops by to explain his management philosophy and how it's
            been informed by Bayern Munich...
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.formula1.com' target='_blank'>
              Formula1.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
