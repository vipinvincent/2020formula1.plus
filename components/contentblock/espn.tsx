import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const ESPN: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md mt-4'>
      <div className='h-32 sm:h-40 w-full'>
        <img
          className='w-full h-full object-contain rounded-md bg-espn'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826931/contentImages/logo/espn_av2iv1.png'
          alt='espn.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.espn.in/f1/story/_/id/29753437/gasly-struggling-accept-hubert-death-one-year-on'
            target='_blank'>
            Gasly still struggling to accept Anthoine Hubert's death one year on
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            One year on from the death of Anthoine Hubert at Spa-Francorchamps,
            Formula One drivers Pierre Gasly and Charles Leclerc have paid
            tribute to their friend ahead of this weekend's Belgian Grand Prix.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            On Thursday, Gasly was among members of the F1 paddock who laid
            flowers at the corner where Hubert suffered fatal injuries in the
            Formula Two race last year. Both Gasly and Leclerc were close
            friends of Hubert's and raced against him in junior categories.
            Gasly, who drives for Alpha Tauri in F1, said it was not easy
            returning to the scene of Hubert's accident this year.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            "As soon as I put one foot in the paddock, I just have these images
            that come back in my mind, and things I don't want to accept or I
            struggle to accept," Gasly said. "Even during the track walk, I was
            thinking ... I just struggle to realise it really happened and
            unfortunately that's just the truth, the reality. "It hasn't been
            easy." Gasly first raced against Hubert when he was 9, and the two
            drivers were roommates during their junior career.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29753437/gasly-struggling-accept-hubert-death-one-year-on'
              target='_blank'>
              espn.com
            </ContentLink>{' '}
            for More Details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default ESPN
