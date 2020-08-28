import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=D5n8_Zz1kgk'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/D5n8_Zz1kgk/sddefault.jpg'
              alt='F1 News: Red Bull "Overachieving" and Leclerc Explains Seat Belt Incident '
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
            href='https://www.youtube.com/watch?v=D5n8_Zz1kgk'
            target='_blank'>
            F1 News: Red Bull "Overachieving" and Leclerc Explains Seat Belt
            Incident
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            In this week’s F1 news round-up: Max Verstappen believes Red Bull
            are overachieving in 2020, Charles Leclerc explains why he drove
            with his Seat Belts undone in Spain and Formula One confirm the
            final calendar for this season. Plus, Renault drop their Racing
            Point appeal and Haas are keeping their 2021 driver options open.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.gptoday.net/en/' target='_blank'>
              The F1 Word
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
