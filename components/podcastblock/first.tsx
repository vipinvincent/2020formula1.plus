import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=wfu3hq83Yq8'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/wfu3hq83Yq8/sddefault.jpg'
              alt='9 factors that led to Pierre Gasly winning F1s crazy Italian GP'
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
            href='https://www.youtube.com/watch?v=wfu3hq83Yq8'
            target='_blank'>
            9 factors that led to Pierre Gasly winning F1’s crazy Italian GP
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Pierre Gasly and AlphaTauri celebrated an unlikely victory in the
            2020 Italian Grand Prix, holding off Carlos Sainz Jr’s McLaren in a
            dramatic battle to the finish. But how many things needed to fall
            into place to put Gasly into a race-winning position? We’ve come up
            with 9, which includes making sure we give the man in question
            credit for the way he performed once the chance to grab a victory
            presented itself
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://the-race.com/' target='_blank'>
              THE RACE
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
