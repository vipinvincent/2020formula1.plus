import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const BBC: React.FC = () => {
  return (
    <div className='relative  mt-0'>
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
            href='https://www.bbc.com/sport/formula1/53778066'
            target='_blank'>
            Toto Wolff considering future as Mercedes boss after 2020 season
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Toto Wolff says he is considering whether to continue as Mercedes
            team principal after this season. Under Wolff, Mercedes have become
            the most successful F1 team in history but his contract runs out
            this year.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            He said he was discussing his future with Ola Kallenius, chairman of
            Mercedes' parent company Daimler. "Many factors make me want to stay
            but it takes its toll," Wolff said. "There is no reason not to
            continue. We will find out in which role."
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Wolff is a 30% shareholder in the Mercedes F1 team as well as its
            boss, and that of the entire Mercedes motorsport programme. He said:
            "We want to do the best for the team and continue to see the team
            prosper. I really enjoy the role and my plan is to continue but I
            never want to be in situation where you are becoming from very good
            to good."
          </p>

          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53778066'
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
