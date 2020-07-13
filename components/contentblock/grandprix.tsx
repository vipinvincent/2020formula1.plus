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
            href='https://www.grandprix247.com/2020/07/13/hamilton-we-need-the-teams-to-hold-themselves-accountable/'
            target='_blank'>
            Hamilton: We need the teams to hold themselves accountable
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Mercedes’ Lewis Hamilton says that Formula 1’s nine other teams must
            do more in the fight against discrimination, particularly in terms
            of affecting change in their own workplaces.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Hamilton, who comfortably won Sunday’s Styrian Grand Prix from pole,
            took a knee before the race and raised his fist on the podium
            afterwards as part of his continued support for the ‘Black Lives
            Matter’ movement
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Asked afterwards about the recent progress the sport has to improve
            diversity, the Briton suggested there was still a long ways to go.
            “I think ultimately Formula 1, yes they’ve taken a step forward, but
            there’s absolutely more they can do,” he told reporters, as reported
            by RaceFans. “I asked, on a call we had on Zoom, I asked: Look, at
            the moment Formula 1 has come forward and said that they are
            supporting ‘end racism’ and it’s amazing to see Mercedes doing the
            same thing. But no other team has said a single thing.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/13/hamilton-we-need-the-teams-to-hold-themselves-accountable/'
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
