import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const BBC: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
      <div className='h-32 sm:h-48 w-full bg-bbc rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
          alt='bbc.com/sport'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <ActionLink
            href='https://www.bbc.com/sport/formula1/53449283'
            target='_blank'>
            Formula 1 personnel test positive for coronavirus
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Two Formula 1 personnel have tested positive for coronavirus in the
            last week. They are the first positive tests for Covid-19 since a
            handful of people contracted the virus at the abandoned race in
            Australia in March.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            A statement said: "The affected people have been removed from
            operations and isolated. Tracing of contacts (has been) completed
            and isolated." The people involved had not been at the opening races
            of the season in Austria.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            BBC Sport understands that those involved were not in front-line
            roles, and nor were they members of any of the 10 teams. The tests
            will have no impact on this weekend's Hungarian Grand Prix. F1
            expects a small number of positive tests to become a normality as
            racing continues through the rest of the year and for the sport to
            carry on in the face of a small numbers of positive tests, in the
            same way Premier League football has done.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53449283'
              target='_blank'>
              bbc.com
            </ContentLink>{' '}
            for more details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'> */}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://the-race.com/formula-1/leclerc-summoned-to-stewards-over-two-separate-incidents/'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded border border-gray-300'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/therace_cq3ao6.png'
                    alt='the-race.com'
                  />
                </ActionLink>
              </div> */}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://www.skysports.com/f1/news/12474/12027615/ross-brawn-on-a-long-road-ahead-for-ferrari-after-very-painful-crash'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                    alt='skysports.com'
                  />
                </ActionLink>
              </div> */}
          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default BBC
