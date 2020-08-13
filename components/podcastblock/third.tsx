import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Third: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=8h4OUaCnxFI'
        target='_blank'>
        <div className='h-full w-full rounded-tl-xxl relative flex'>
          <div className='h-full w-full bg-black-100 rounded-tl-xxl'>
            <img
              className='w-full h-40 object-cover rounded-tl-xxl'
              src='https://img.youtube.com/vi/8h4OUaCnxFI/sddefault.jpg'
              alt='Paddock chat with Esteban Ocon & Clarisse Agbegnenou '
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
            Interview
          </div>
          <ContentLink
            href='https://www.youtube.com/watch?v=8h4OUaCnxFI'
            target='_blank'>
            Paddock chat with Esteban Ocon & Clarisse Agbegnenou
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Pre-race chat with Esteban Ocon & Le Coq Sportif ambassador Clarisse
            Agbegnenou! This was recorded live on Sunday of the F1 70th
            Anniversary GP.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink href='https://www.renaultsport.com/' target='_blank'>
              Renault Sport
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Third
