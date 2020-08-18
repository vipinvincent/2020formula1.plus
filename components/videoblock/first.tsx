import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=T5S1h95qoB4'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-96 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/T5S1h95qoB4/sddefault.jpg'
              alt='Why banning a dramatic Mercedes F1 advantage may backfire'
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
            href='https://www.youtube.com/watch?v=T5S1h95qoB4'
            target='_blank'>
            Why banning a 'dramatic' Mercedes F1 advantage may backfire
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            F1 team's special engine modes for qualifying are set to be
            outlawed, in what is basically an attempt to peg back Mercedes on
            Saturday afternoons when everyone turns their engines up for
            qualifying and the world champion team becomes untouchable. But will
            it work? Scott Mitchell looks at the numbers from 2020 and last
            season to see if Mercedes really gains as much as everyone thinks,
            and we take into consideration a word of warning from team boss Toto
            Wolff that it could make things worse for the opposition on Sundays.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://the-race.com/' target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
