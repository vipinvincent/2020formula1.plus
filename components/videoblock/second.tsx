import React from 'react'
// import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'
import ThumbnailLink from 'components/link/ThumbnailLink'

const Second: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <ThumbnailLink
        href='https://www.youtube.com/watch?v=gg7Z7Rt0_Bw'
        target='_blank'>
        <div className='h-full w-full rounded-md relative flex'>
          <div className='h-full w-full bg-black-100 rounded-t-md  '>
            <img
              className='w-full h-48 lg:h-64 object-cover rounded-t-md  '
              src='https://img.youtube.com/vi/gg7Z7Rt0_Bw/sddefault.jpg'
              alt='Why Verstappen has felt out of place in F1 2020'
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
            href='https://www.youtube.com/watch?v=gg7Z7Rt0_Bw'
            target='_blank'>
            Why Verstappen has felt out of place in F1 2020
          </ContentLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Max Verstappen has been the only threat to Mercedes in another
            season of dominance for F1's unstoppable team. But it's still not
            been the most rewarding for the Dutch star. In this video Scott
            Mitchell looks at why Verstappen has felt like a "third wheel" up
            against Lewis Hamilton and Valtteri Bottas, and how his forgettable
            visits to Italy this season have derailed his chances of muscling in
            on the party for the black cars at the top of the standings.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            View more at{' '}
            <ContentLink
              href='https://the-race.com/formula-1/verstappens-italy-hoodoo-has-spoiled-his-best-f1-season/'
              target='_blank'>
              The Race
            </ContentLink>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Second
