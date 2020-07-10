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
            href='https://www.planetf1.com/news/charles-leclerc-warned-over-breach/'
            target='_blank'>
            Leclerc warned over coronavirus breach
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari’s Charles Leclerc has escaped with a warning after breaking
            Formula One’s strict Covid-19 protocol. All F1 personnel are
            required to remain within their so-called bubbles between races as a
            precaution against the virus.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            But a picture of the 22-year-old Leclerc posing with a waiter at a
            Monte Carlo restaurant this week emerged on social media. An FIA
            spokesperson told the PA news agency: “Ferrari have been issued with
            a reminder and warned that any further breaches of the Covid-19 Code
            of Conduct could be referred to the stewards.”
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Leclerc was found to have breached Article 3.14 of the code, which
            reads: “Any time outside the venue during a covered event or between
            covered events must be spent with other members of the same group,
            keeping interaction with persons outside that group to a minimum.”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/news/charles-leclerc-warned-over-breach/'
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
