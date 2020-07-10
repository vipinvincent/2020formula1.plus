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
            href='https://www.grandprix247.com/2020/07/10/abiteboul-renault-remain-committed-to-driver-academy/'
            target='_blank'>
            Abiteboul: Renault remain committed to driver academy
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Cyril Abiteboul insists that Renault remains committed to its driver
            academy, despite the decision to sign Fernando Alonso for the 2021
            season.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The two-time Formula 1 world champion will be 39 years old by the
            time the final season of the current regulations gets underway,
            while academy drivers Guanyu Zhou and Christian Lundgaard will be
            forced to wait for their chance.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Asked whether the decision to sign Alonso undermined Renault’s
            commitment to the programme, Abiteboul said that timing had largely
            influenced their decision.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/10/abiteboul-renault-remain-committed-to-driver-academy/'
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
