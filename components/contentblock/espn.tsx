import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const ESPN: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 w-full'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-espn'
          src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
          alt='espn.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            espn.com
          </div>
          <ActionLink
            href='https://www.espn.in/f1/story/_/id/29455171/where-does-ferrari-go-here'
            target='_blank'>
            Where does Ferrari go from here?
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            After the first two races of the 2020 Formula One world
            championship, Ferrari sits fifth in the constructors' championship.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            If anything that flatters the team's performance at the opening two
            rounds and it would not be a stretch to rank it as the sixth best
            team behind Renault as well as Racing Point, Red Bull, McLaren and
            Mercedes.For a team that has finished second for the last three
            years and won the 16 titles in its glorious history, it is a massive
            fall from grace.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The collision between the two Ferrari drivers on Sunday was
            unfortunate, but really only represents the tip of the iceberg.
            After qualifying 10th and 14th on the grid, Sebastian Vettel and
            Charles Leclerc were in unfamiliar territory in the messy lower
            midfield battle where accidents invariably happen, and took each
            other out.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29455171/where-does-ferrari-go-here'
              target='_blank'>
              espn.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default ESPN
