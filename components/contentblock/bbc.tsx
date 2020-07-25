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
            href='https://www.bbc.com/sport/formula1/53527355'
            target='_blank'>
            Formula 1: US, Mexican & Brazilian races will not go ahead in 2020
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Formula 1 has called off the US, Mexican and Brazilian Grands Prix
            this year as a result of the coronavirus crisis in the Americas.
            With infection rates rising in the three countries, F1 bosses
            believe it would be irresponsible to hold races there.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Instead, three further races in Europe are to be added to the
            calendar. These will see a return for Germany's Nurburgring and
            Imola in Italy, and an F1 debut for Portugal's Portimao track. The
            US Grand Prix in Austin, Texas, had been due to be held on 23
            October, with the Mexican race in Mexico City a week later and
            Brazil on 13 November. But F1 officials have accepted that it will
            be impossible to hold the races.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Any hopes of reviving the Canadian race, originally scheduled for
            June and postponed in April, have also been abandoned. The
            coronavirus has a much lower prevalence in Canada, but the country
            has local restrictions and travel rules that make impossible to hold
            a race.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            An F1 statement said: "Due to the fluid nature of the ongoing
            Covid-19 pandemic, local restrictions and the importance of keeping
            communities and our colleagues safe, it will not be possible to race
            in Brazil, USA, Mexico and Canada this season." The grand prix at
            the Nurburgring, which last hosted a race in 2013, will be held on
            11 October, when it will be vulnerable to bad weather.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53527355'
              target='_blank'>
              bbc.com
            </ContentLink>{' '}
            for More Details...
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
