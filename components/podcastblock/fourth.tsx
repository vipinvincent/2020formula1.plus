import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Fourth: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=usmCWtj8-IA'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/usmCWtj8-IA/sddefault.jpg'
              alt='F1 IN 10 | LATEST NEWS | Mercedesrecord, Piastris F1 test, and Alfa Romeo'
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
            href='https://www.youtube.com/watch?v=usmCWtj8-IA'
            target='_blank'>
            F1 IN 10 | LATEST NEWS | Mercedes' record, Piastri's F1 test, and
            Alfa Romeo
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            - Hamilton set for seventh title - Piastri gets Bahrain test -
            Stability at Alfa Romeo - Gasly gets 2021 AlphaTauri nod - Massa
            keen for another slice of Turkey - Saudi race plan meets opposition
            - Driver salary cap coming - Reverse-grid quali races blocked again
            - Ferrari world finals postponed - Bottas tyre decision defended
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://unbeaten.com/formula1 ' target='_blank'>
              Unbeaten F1
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Fourth
