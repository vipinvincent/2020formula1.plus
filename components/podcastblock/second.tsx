import React from 'react'
import YouTube from 'react-youtube'
import ContentLink from 'components/link/ContentLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='rounded-tl-xxl text-left pb-2'>
        <div className='rounded-tl-xxl youtube'>
          <YouTube videoId='H3DNJBSRJDU' className='w-full h-48' />
        </div>
        <div className='px-2 py-2'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Podcast
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=H3DNJBSRJDU'
            target='_blank'>
            Building the Greatest F1 Team | Episode 1: Race Engineer
          </ContentLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Welcome to a very special 7-part series where we've asked the
            question: what would the lineup of the greatest F1 team look like?
            We’ve set out to build a team made up of the best there ever was.
            The first vacancy we're filling today is that of Race Engineer. On
            the podcast, your host Jessica McFadyen is joined by James Allen,
            Jonathan Noble, Stuart Codling and James Newbold.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Courtesy{' '}
            <ContentLink href='https://www.motorsport.com/f1/' target='_blank'>
              motorsport.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
