import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const TheRace: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-gray-800 px-8 py-8'
          src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
          alt='the-race.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            the-race.com
          </div>
          <ActionLink
            href='https://the-race.com/formula-1/ferrari-updates-didnt-show-their-worth-leclerc-penalised/'
            target='_blank'>
            Ferrari updates ‘didn’t show their worth’; Leclerc penalised
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Mattia Binotto says Ferrari’s fast-tracked upgrades have not “shown
            their worth” and the Formula 1 team’s situation is “just not good
            enough”, as a three-place grid penalty for Charles Leclerc
            compounded its misery at the Styrian Grand Prix.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari trialled a new front wing and floor at the second Red Bull
            Ring event having worked to accelerate an aerodynamic development
            package it initially expected to have next week in Hungary. After a
            quietly encouraging Friday, despite lacking ultimate performance,
            Ferrari toiled in the wet conditions of qualifying with Sebastian
            Vettel only 10th and Leclerc getting knocked out in Q2 – the second
            time in two races a Ferrari has been eliminated at that stage.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Binotto called it a “really disappointing day” and said Ferrari must
            face up to the fact that “the stopwatch doesn’t ever lie” after it
            was outqualified by cars from Mercedes, Red Bull, McLaren, Renault
            and AlphaTauri.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://the-race.com/formula-1/ferrari-updates-didnt-show-their-worth-leclerc-penalised/'
              target='_blank'>
              the-race.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default TheRace
