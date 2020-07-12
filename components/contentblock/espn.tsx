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
            href='https://www.espn.in/f1/story/_/id/29447411/hamilton-pole-position-lap-was-all-r-here-how-did-it'
            target='_blank'>
            Hamilton's pole position lap was an all-timer - here's how he did it
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Make no mistake, Lewis Hamilton's pole position lap at the Styrian
            Grand Prix will feature prominently in Formula One's archive of
            great wet-weather performances.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Modern F1 is usually too competitive to allow margins of over a
            second between first and second on the grid, yet Hamilton managed to
            qualify 1.216s clear of his closest competitor, Max Verstappen. The
            last time someone held such a big advantage over the rest of the
            field was at the 2017 Italian Grand Prix and, you guessed it, it was
            Hamilton leading the way during that wet session too.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            While it's true that Verstappen would have been closer had he not
            spun on his final lap, the fact he made a mistake and Hamilton did
            not tells you a lot about how good the pole lap was. Besides which,
            Hamilton was already 0.408s faster than Verstappen through the first
            two sectors, so the margin was still set to be significant
            regardless of Verstappen's mistake.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29447411/hamilton-pole-position-lap-was-all-r-here-how-did-it'
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
