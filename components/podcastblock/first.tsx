import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=zwxY88N6yBE'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/zwxY88N6yBE/sddefault.jpg'
              alt='F1 Nation: Why You Should Never Ignore Daniel Ricciardo'
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
            href='https://www.youtube.com/watch?v=zwxY88N6yBE'
            target='_blank'>
            F1 Nation: Why You Should Never Ignore Daniel Ricciardo
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            After a historic weekend at Imola, Tom Clarkson and Alex Jacques
            discuss another stellar drive from Daniel Ricciardo, Mercedes
            seventh straight title and much more.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.Formula1.com' target='_blank'>
              Formula 1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
