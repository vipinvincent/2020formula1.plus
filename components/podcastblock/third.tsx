import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=g1jsNP-l65k'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/g1jsNP-l65k/sddefault.jpg'
              alt='The F1 Season That Gave Us 7 Winners In 7 Races'
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
            href='https://www.youtube.com/watch?v=g1jsNP-l65k'
            target='_blank'>
            The F1 Season That Gave Us 7 Winners In 7 Races
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            We take a look back at the incredible start to the 2012 Formula One
            season that saw seven different drivers win the first seven races,
            including a very unlikely winner!
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.wtf1.com' target='_blank'>
              WTF1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
