import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=xl0a0H9KDAw'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/xl0a0H9KDAw/sddefault.jpg'
              alt='Lando Norris discusses the key to his improvements this season & future teammate Daniel Ricciardo '
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
            href='https://www.youtube.com/watch?v=xl0a0H9KDAw'
            target='_blank'>
            Lando Norris discusses the key to his improvements this season &
            future teammate Daniel Ricciardo
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
            <ContentLink href='https://www.skysports.com/f1/' target='_blank'>
              Sky Sports F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
