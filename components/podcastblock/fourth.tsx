import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=z7ZW3FPFizI'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/z7ZW3FPFizI/sddefault.jpg'
              alt='Why Lewis Hamilton Is More Than Just THE CAR'
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
            href='https://www.youtube.com/watch?v=z7ZW3FPFizI'
            target='_blank'>
            Why Lewis Hamilton Is More Than Just THE CAR
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            My 1000 Subscriber Special. Thank you all for helping me hit this
            milestone. In qualifying for the 2020 Belgian Grand Prix, Hamilton
            took pole by over 5 tenths of a second from Bottas. His ability to
            maximise the potential of his car has remained prominent for years.
            But there are still people out there who only think he wins just
            because he drives a Mercedes Benz and diminish his achievements to
            'always having a good car'. In this video, I will debunk this
            argument and prove Lewis Hamilton is more than just the car.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/channel/UC0_DTzrD8nSiIr4S_QWVLPw'
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
