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
            href='https://www.grandprix247.com/2020/07/08/alonso-in-formula-1-the-stopwatch-matters-not-the-age/'
            target='_blank'>
            Alonso: In Formula 1 the stopwatch matters, not the age
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Two-times Formula 1 world champion Fernando Alonso said age was not
            the issue after securing a comeback deal with Renault to race into
            his forties. The Spaniard turns 39 this month and, after two seasons
            out, will be returning next year with the team that took him to his
            titles in 2005 and 2006.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            “In Formula 1 for many years the stopwatch is the only thing that
            matters, not the age,” Alonso told reporters in a video news
            conference on Wednesday. “I never had a race classification based on
            the passport, date of birth. Always on the time watch.”
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Alonso will be the oldest driver next year if his former Ferrari
            teammate Kimi Raikkonen, already 40 and now with Alfa Romeo, decides
            to stop.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/08/alonso-in-formula-1-the-stopwatch-matters-not-the-age/'
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
