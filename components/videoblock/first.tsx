import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=hPhTQIZxaho'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/hPhTQIZxaho/sddefault.jpg'
              alt='Why Pierre Gaslys Demotion Was The BEST THING To Happen To Him'
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
            href='https://www.youtube.com/watch?v=hPhTQIZxaho'
            target='_blank'>
            Why Pierre Gasly's Demotion Was The BEST THING To Happen To Him
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Pierre Gasly's maiden win in Monza was the perfect redemption after
            all the struggles early on in his career. Getting dropped at the end
            of August last year, then losing his friend Anthoine Hubert was not
            an easy experience as a 23-year-old. Despite all the struggles, he
            has focused solely on improving himself and not worrying about the
            noise and comments around him. But I want to give an insight into
            why I think his demotion was the best thing to happen to him.
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
export default First
