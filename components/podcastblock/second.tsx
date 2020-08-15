import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=jILbTz4akJM'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/jILbTz4akJM/sddefault.jpg'
              alt='VERSTAPPEN CRUSHES MERCEDES! 70th Anniversary GP Podcast'
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
            href='https://www.youtube.com/watch?v=jILbTz4akJM'
            target='_blank'>
            Should F1 Introduce Mandatory 2-stop Races? | Is It Just Me? Podcast
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Jess McFadyen is joined by Luke Smith ahead of the 2020 Spanish GP
            this weekend. After the switch up of tyre compounds that made the
            70th Anniversary GP come alive and see Max Verstappen secure his
            first win of the season, this week we ask: Should F1 Introduce
            Mandatory 2-stop Races? Jess and Luke go through what you think.
          </p>

          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.autosport.com/' target='_blank'>
              Autosport
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
