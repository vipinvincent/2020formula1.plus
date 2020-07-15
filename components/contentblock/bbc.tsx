import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const BBC: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-bbc'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
          alt='bbc.com/sport'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            bbc.com
          </div>
          <ActionLink
            href='https://www.bbc.com/sport/formula-one/53387307'
            target='_blank'>
            Ross Brawn says Ferrari face a 'long road ahead' to rediscover
            competitiveness
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari have "a long road ahead" as they attempt to rediscover their
            competitiveness, according to Formula 1 managing director Ross
            Brawn.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari have qualified in the lower reaches of the top 10 at the
            opening two races and the car is around a second a lap slower than
            the Mercedes. Brawn said: "They aren't going to turn it around
            overnight."
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The 65-year-old was Ferrari's technical director when they dominated
            F1 in the early 2000s with Michael Schumacher. Brawn, writing in his
            column for F1 after Sunday's Styrian Grand Prix in Austria, added:
            "There's a long road ahead of them. They need to find out if there
            is a fundamental problem with the car - and they need to find out
            fast - because clearly they are some way off the pace.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula-one/53387307'
              target='_blank'>
              bbc.com
            </ContentLink>{' '}
            for more details...
          </p>
          <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              {/* <div className='mr-2'>
                <ActionLink
                  href='https://the-race.com/formula-1/leclerc-summoned-to-stewards-over-two-separate-incidents/'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded border border-gray-300'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/therace_cq3ao6.png'
                    alt='the-race.com'
                  />
                </ActionLink>
              </div> */}
              <div className='mr-2'>
                <ActionLink
                  href='https://www.skysports.com/f1/news/12474/12027615/ross-brawn-on-a-long-road-ahead-for-ferrari-after-very-painful-crash'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                    alt='skysports.com'
                  />
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BBC
