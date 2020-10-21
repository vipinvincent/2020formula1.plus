import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=a5JBRrxrhZs'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/a5JBRrxrhZs/sddefault.jpg'
              alt='F1 Nation: What Is The Best-Looking F1 Car?'
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
            href='https://www.youtube.com/watch?v=a5JBRrxrhZs'
            target='_blank'>
            F1 Nation: What Is The Best-Looking F1 Car?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Dario Franchitti starts a debate about the best-looking F1 car ever,
            a mailbag question accidentally creates an F1 book club and Emanuele
            Pirro drops by to talk about the conflict of being an F1 steward and
            more!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.Formula1.com' target='_blank'>
              Formula1.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
