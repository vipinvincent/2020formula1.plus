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
            href='https://www.grandprix247.com/2020/07/11/brawn-so-far-so-good-but-no-complacency-with-covid-19/'
            target='_blank'>
            Brawn: So far so good, but no complacency with COVID-19
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Formula 1’s managing director for motorsport Ross Brawn has warned
            against complacency after thousands of negative COVID-19 tests,
            saying on Saturday there was bound to be a positive at some point.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The latest batch of 4,566 tests carried out at Austria’s Red Bull
            Ring between July 3-9 were all negative, as were the previous 4,032
            conducted between June 26 and July 2.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Australian Grand Prix on March 15, which would have been the
            season-opener, was cancelled after a McLaren team employee tested
            positive but the sport has come up with a system that allows racing
            to continue if that happens again.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.grandprix247.com/2020/07/11/brawn-so-far-so-good-but-no-complacency-with-covid-19/'
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
