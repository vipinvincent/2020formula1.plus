import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const GrandPrix: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-white-50 p-8'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/grandprix247_yj6fcw.png'
          alt='grandprix247.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            grandprix247.com
          </div>
          <ActionLink
            href='https://www.grandprix247.com/2020/07/14/russell-were-not-as-quick-as-we-thought-wed-be/'
            target='_blank'>
            Russell: We’re not as quick as we thought we’d be
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Williams’ George Russell says the slide back from his P12 start at
            the Styrian Grand Prix came as a surprise, as he had hoped to have
            better pace in race trim.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Able to outperform his car in Saturday’s wet qualifying, Russell
            started the race from 12th, but saw him slide down to 16th at the
            flag, the penultimate finisher ahead of teammate Nicholas Latifi.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            And while Russell did himself no favours with a lap 4 off into the
            gravel while fighting with Haas’ Kevin Magnussen, the Briton
            suggests his error had little to do with the final outcome.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/14/russell-were-not-as-quick-as-we-thought-wed-be/'
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
