import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=xxyMjwG9z0c'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/xxyMjwG9z0c/sddefault.jpg'
              alt='Imola Grand Prix Race Review F1 2020'
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
            href='https://www.youtube.com/watch?v=xxyMjwG9z0c'
            target='_blank'>
            Imola Grand Prix Race Review F1 2020
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Formula 1 2020 Emilia Romagna Grand Prix season is here! Today
            we analyse the F1 2020 Imola Grand Prix, taking a look at the Race
            Results as well as all the highlights and incidents, both Albon and
            Verstappens Crashes, Ricciardos performance , and the two Mercedes
            battle Again! With Hamilton now a 6 time champion, can Leclerc,
            Verstappen and Norris challenge even closer this year?
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/F1Reviews/'
              target='_blank'>
              F1/E Reviews
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
