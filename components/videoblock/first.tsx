import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=xSWkDsonGTI'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/xSWkDsonGTI/sddefault.jpg'
              alt='Why theres now no case for Red Bull keeping Albon over Perez for F1 2021'
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
            href='https://www.youtube.com/watch?v=xSWkDsonGTI'
            target='_blank'>
            Why there’s now no case for Red Bull keeping Albon over Perez for F1
            2021
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull has been doing all it can to let Alex Albon prove he
            deserves to keep his F1 drive for 2021… then he finished sixth in a
            race where the other leading cars were out of contention, and the
            man who’s in the running to replace him won it. In this video Scott
            Mitchell explains the case against Albon, looking into the numbers
            from his season that show a worrying lack of improvement against Max
            Verstappen. If Red Bull’s 2021 driver decision is based on
            performance reasons, Sergio Perez has to get the drive
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/there-is-now-no-case-for-red-bull-keeping-albon-over-perez/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default First
