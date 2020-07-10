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
            href='https://www.espn.in/f1/story/_/id/29439328/red-bull-racing-point-not-considering-vettel-2021'
            target='_blank'>
            Red Bull and Racing Point not considering Vettel for 2021
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Red Bull team principal Christian Horner has confirmed Sebastian
            Vettel is not being considered as Max Verstappen's teammate next
            year, despite the four-time world champion showing interest in a
            return.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Vettel will be replaced by Carlos Sainz at Ferrari next year and it
            is looking increasingly unlikely that he will remain on the F1 grid
            in 2021.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            He revealed on Thursday that he has held talks with Renault, but
            that option closed off when the French manufacturer signed Fernando
            this week. Red Bull has a deal with Verstappen until the end of
            2023, but has yet to confirm Alex Albon, who joined the team from
            Toro Rosso last year, as his teammate for 2021.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29439328/red-bull-racing-point-not-considering-vettel-2021'
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
