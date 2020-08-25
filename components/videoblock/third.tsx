import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=jlKQaVWKLNo'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/jlKQaVWKLNo/sddefault.jpg'
              alt='Why Ferraris Treatment Of Sebastian Vettel In 2020 ISNT Surprising'
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
            href='https://www.youtube.com/watch?v=jlKQaVWKLNo'
            target='_blank'>
            Why Ferrari's Treatment Of Sebastian Vettel In 2020 ISN'T Surprising
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            In light of the events at the 70th Anniversary GP and the Spanish
            GP, I wanted to make a video about how Ferrari are treating
            Sebastian Vettel this season and it may not come as a surprise.
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
export default Third
