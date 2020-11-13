import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=KqkBlTWueME'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/KqkBlTWueME/sddefault.jpg'
              alt='Jochen Mass On Hunt And Lauda, Mentoring Schumacher And More | Beyond The Grid | Official F1 Podcast'
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
            href='https://www.youtube.com/watch?v=KqkBlTWueME'
            target='_blank'>
            Jochen Mass On Hunt And Lauda, Mentoring Schumacher And More |
            Beyond The Grid | Official F1 Podcast
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            A career tinged with tragedy, racing Lauda and Hunt, and mentoring
            Michael Schumacher - our latest guest on the official F1 Beyond The
            Grid podcast is Jochen Mass, who opens up candidly about his
            remarkable life and career...
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
