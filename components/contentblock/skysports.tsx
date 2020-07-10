import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const SkySports: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-skysports'
          src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
          alt='skysports.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            skysports.com
          </div>
          <ActionLink
            href='https://www.skysports.com/f1/news/12433/12024949/f1-drivers-explain-different-stances-on-taking-a-knee-at-austrian-gp'
            target='_blank'>
            F1 drivers explain different stances on taking a knee at Austrian GP
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Fourteen of F1's drivers took a knee ahead of the Austrian GP, but
            six did not; Drivers have explained their differing stances. Formula
            1's drivers have explained their differing stances on taking a knee
            ahead of last Sunday's Austrian GP after 14 of the 20 on the grid
            made the gesture.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            In a public show against racism and discrimination ahead of the
            season-opening race coordinated by F1 and the Grand Prix Drivers'
            Association, all 20 drivers wore T-shirts featuring the message 'End
            Racism' as they gathered at the front of the grid. Lewis Hamilton's
            T-shirt also included 'Black Lives Matter' on the front.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The GPDA said in a statement that drivers would be free to show
            their support in their own way. Fourteen drivers also took a knee,
            six did not, meaning there was no collective gesture as seen in
            other sports such as the Premier League and by the England and West
            Indies cricket teams before the first Test on Wednesday.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news/12433/12024949/f1-drivers-explain-different-stances-on-taking-a-knee-at-austrian-gp'
              target='_blank'>
              skysports.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default SkySports
