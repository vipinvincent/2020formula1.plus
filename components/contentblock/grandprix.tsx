import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const GrandPrix: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-white-50 p-8'
          src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
          alt='grandprix247.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            grandprix247.com
          </div>
          <ActionLink
            href='https://www.grandprix247.com/2020/07/10/raikkonen-everyone-has-a-right-to-do-what-they-feel-like/'
            target='_blank'>
            Raikkonen: Everyone has a right to do what they feel like
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Veteran F1 driver Kimi Raikkonen said it was “crazy” to question why
            six drivers declined to take a knee alongside Lewis Hamilton,
            insisting “each individual has the right to do what they feel most
            comfortable.”
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Six-time world champion Lewis Hamilton and 13 other drivers all took
            a knee on the grid just before last weekend’s season-opening
            Austrian Grand Prix to show their support of anti-racism protests.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            However, six remained standing. They were former world champion
            Raikkonen, his Alfa Romeo team-mate Antonio Giovinazzi, Ferrari’s
            Charles Leclerc, Red Bull’s Max Verstappen, Daniil Kvyat of Alpha
            Tauri and Carlos Sainz of McLaren.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/10/raikkonen-everyone-has-a-right-to-do-what-they-feel-like/'
              target='_blank'>
              grandprix247.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default GrandPrix
