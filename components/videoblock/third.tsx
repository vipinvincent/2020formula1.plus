import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=EfK1aqTUWQ4'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/EfK1aqTUWQ4/sddefault.jpg'
              alt='Why going back to Red Bull would be damaging for Gaslys F1 career'
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
            href='https://www.youtube.com/watch?v=EfK1aqTUWQ4'
            target='_blank'>
            Why going back to Red Bull would be damaging for Gasly's F1 career
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Pierre Gasly's shock win in the Italian Grand Prix at Monza
            immediately prompted talk of if Red Bull should put him back into
            its senior team in place of Alex Albon. Edd Straw and Scott Mitchell
            join Glenn Freeman to discuss what Red Bull should do and when it
            should consider another shuffling of its pack, as well as weighing
            up the development of Gasly and Albon since they swapped places in
            the middle of 2019.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://the-race.com/formula-1/' target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
