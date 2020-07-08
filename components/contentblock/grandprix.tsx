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
            href='https://www.grandprix247.com/2020/07/07/italian-media-hot-for-little-prince-leclerc-cool-on-vettel/'
            target='_blank'>
            Italian Media hot for Little Prince Leclerc, cool on Vettel
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Italian media has hailed “Little Prince” Charles Leclerc’s
            second-place performance at the 2020 F1 season-opening Austrian
            Grand Prix, while criticising the other Ferrari driver Sebastian
            Vettel who did himself no favours when again he fell victim to his
            own mistake. La Gazzetta dello Sport focused on the positives of
            Leclerc’s race and wrote, “The talent of Leclerc overcame Ferrari’s
            shortcomings which bodes well for the young driver’s career. He
            defended intelligently and attacked when the right time came to do
            so.” “Who would have thought that Charles Leclerc, in his second
            year with the team, would be ahead of big favourite Lewis Hamilton
            in the drivers’ standings. After Ferrari’s mediocre performance in
            qualifying – almost a second slower at the same venue as they were
            last year – no one would have dared to predict this, but it
            happened.”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/07/italian-media-hot-for-little-prince-leclerc-cool-on-vettel/'
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
