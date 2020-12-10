import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=-RviIoyPxfo'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/-RviIoyPxfo/sddefault.jpg'
              alt='Mattia Binotto On The Pride And Pressure Of Leading Ferrari | Beyond The Grid | F1 Official Podcast'
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
            href='https://www.youtube.com/watch?v=-RviIoyPxfo'
            target='_blank'>
            Mattia Binotto On The Pride And Pressure Of Leading Ferrari | Beyond
            The Grid | F1 Official Podcast
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The job of Ferrari team principal is arguably the most prestigious
            in Formula 1, but it’s also the one that undoubtedly carries the
            most pressure. The man whose task it is to lead the Scuderia right
            now is Mattia Binotto, who joins us on this week’s show. Binotto is
            a Ferrari lifer, having joined the team straight out of university
            and worked numerous roles over his 25 years stay. He tells us all
            about that journey, which included working as an engineer for
            Michael Schumacher. Plus there’s also plenty of chat about Leclerc,
            Sainz and Vettel...
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='http://www.formula1.com' target='_blank'>
              Formula1.com
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
