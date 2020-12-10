import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=UlIOhD60y1s'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/UlIOhD60y1s/sddefault.jpg'
              alt='The Truth About George Russell'
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
            PODCAST
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=UlIOhD60y1s'
            target='_blank'>
            The Truth About George Russell
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Coming off the back of a stellar debut for Mercedes, George Russell
            can only take confidence from how quickly he adapted to the W11 in
            Lewis Hamilton's absence. The man from Norfolk stunned many
            throughout the weekend as he progressively got better and better
            throughout the weekend. Now we have seen him compete in a good car,
            how good do you think he is?
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/BMPHF1/'
              target='_blank'>
              BMPHF1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
