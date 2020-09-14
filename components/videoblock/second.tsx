import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=uPLrEgOlS6A'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/uPLrEgOlS6A/sddefault.jpg'
              alt='Will Anybody EVER Stop The Hamilton-Mercedes Dominance?'
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
            href='https://www.youtube.com/watch?v=uPLrEgOlS6A'
            target='_blank'>
            Will Anybody EVER Stop The Hamilton-Mercedes Dominance?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton and Mercedes since 2017 have been simply unstoppable
            - for better or for worse. Hamilton and his team have developed such
            a strong relationship to a point where they are the most efficient
            pairing in F1 history. But looking ahead to 2022, I'm wondering
            whether anyone will stop them whilst they're still together.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/BMPHF1'
              target='_blank'>
              BMPHF1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
