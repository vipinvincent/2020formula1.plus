import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=NR7GMz_neGU'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/NR7GMz_neGU/sddefault.jpg'
              alt='Who Will Haas Sign For 2021?'
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
            href='https://www.youtube.com/watch?v=NR7GMz_neGU'
            target='_blank'>
            Who Will Haas Sign For 2021?
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            It’s all change at Haas for 2021 after the team confirmed that
            Romain Grosjean and Kevin Magnussen would not be kept on next
            season. So, what are Haas’ 2021 F1 driver options? And who do I
            think they will sign-up for next year?
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/user/seanculli'
              target='_blank'>
              The F1 Word
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
