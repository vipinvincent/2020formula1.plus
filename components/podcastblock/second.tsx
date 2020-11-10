import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=NhmxWQOmcuY'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/NhmxWQOmcuY/sddefault.jpg'
              alt='Daniel Ricciardo: The Difference Maker For Renault'
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
            href='https://www.youtube.com/watch?v=NhmxWQOmcuY'
            target='_blank'>
            Daniel Ricciardo: The Difference Maker For Renault
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Daniel Ricciardo has been one of the standout performers in the 2020
            F1 season. He and the team have gone on a superb run of form
            recently, comfortably fighting at the forefront of the midfield.
            After scoring two podiums so far, I have decided to take a look at
            the phenomenal season Ricciardo is having, and what I think his
            performance this season means going forward.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.youtube.com/c/BMPHF1/'
              target='_blank'>
              BMPHF1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
