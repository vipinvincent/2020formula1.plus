import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=yFIuXnAo_ks'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/yFIuXnAo_ks/sddefault.jpg'
              alt='F1 IN 10 | LATEST NEWS | Hamiltons seventh, Pirellis Mario Isola, and Red Bulls Bosphorus run
'
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
            PODCAST
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=yFIuXnAo_ks'
            target='_blank'>
            F1 IN 10
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            - Renault excited for Alonso return - Hamilton deflects knighthood
            calls - Albon given time to shine - Schumacher to race smart -
            Ilott/Schumacher get F1 tests - Macau won by proud local - Safety
            car duties to be shared? - Nissany and Aitken get seat time - Merc
            questions low-grip pace
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://unbeaten.com/formula1' target='_blank'>
              Unbeaten F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
