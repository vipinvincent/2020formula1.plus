import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=WG7TP1lARDM'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/WG7TP1lARDM/sddefault.jpg'
              alt='The Double Stack Pit Stop, EXPLAINED | 2020 Sakhir GP F1 Race Debrief'
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
            href='https://www.youtube.com/watch?v=WG7TP1lARDM'
            target='_blank'>
            The Double Stack Pit Stop, EXPLAINED | 2020 Sakhir GP F1 Race
            Debrief
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            James Allison answers your Sakhir Grand Prix questions – from what
            the engine issue was that George reported over the radio, to why we
            kept Valtteri out longer for the first stint and… of course… what
            happened in that double stack pit stop.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://www.mercedesamgf1.com/en/'
              target='_blank'>
              Mercedes-AMG Petronas F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
