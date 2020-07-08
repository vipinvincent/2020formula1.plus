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
            Horner: Red Bull may develop ‘more extreme’ DAS
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Christian Horner has confirmed that Red Bull is working on their own
            version of DAS, and suggested they may opt for a “more extreme”
            system. The device designed by Mercedes was a talking point
            throughout the first race weekend of the system, with Red Bull
            lodging a protest to the FIA about it. Many believe that they did so
            that, if it was deemed legal, they’d be able to develop a system of
            their own. Speaking to Servus TV, Horner confirmed that they are
            indeed looking into doing so and implementing it at some point this
            season, and said that they may go for something more “extreme” than
            the German team.
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
