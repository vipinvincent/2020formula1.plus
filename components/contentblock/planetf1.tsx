import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-white-50 p-8'
          src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
          alt='planetf1.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            planetf1.com
          </div>
          <ActionLink
            href='https://www.planetf1.com/news/red-bull-developing-das/'
            target='_blank'>
            Mercedes ‘made wrong call and got away with it’
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Red Bull’s Christian Horner felt Mercedes made a strategy error in
            the first race at the Red Bull Ring but “got away with it”.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Horner is referencing the fact that Mercedes opted not bring in
            Valtteri Bottas or Lewis Hamilton during the final Safety Car period
            and they left themselves vulnerable to attack from Alex Albon, who
            did pit for fresher, softer rubber. Albon’s race would fall apart
            soon after the restart due to a collision with Lewis Hamilton which
            sent him spinning and he was then forced to retire with an
            electrical issue.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Horner said he was surprised not to see Mercedes pit again and feels
            their strategy mistake has gone unpunished.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/news/red-bull-developing-das/'
              target='_blank'>
              planetf1.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default PlanetF1
