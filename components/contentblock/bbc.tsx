import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const BBC: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-bbc'
          src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
          alt='bbc.com/sport'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            bbc.com
          </div>
          <ActionLink
            href='https://www.bbc.com/sport/formula1/53355494'
            target='_blank'>
            Lewis Hamilton focused on retaining world title and fighting racism
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lewis Hamilton says he is focused on both winning the world
            championship and fighting racism this year. Formula 1 drivers stood
            against racism at the season-opening Austrian Grand Prix in which
            Hamilton finished fourth.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Hamilton said: "I don't feel like I need to refocus. My race was
            pretty strong. I need to do a better job but I wouldn't say I was
            distracted. "I am focused on both - trying to fight and win this
            championship but also fighting for equal rights."
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Mercedes driver had a slightly messy weekend at the Austrian GP,
            receiving a three-place grid penalty after not slowing for yellow
            flags in qualifying and then a five-second penalty in the race for a
            collision with Red Bull's Alexander Albon. The penalty demoted
            Hamilton to fourth place, while his team-mate Valtteri Bottas won
            the race and now has a 13-point lead over the Briton in the
            championship.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53355494'
              target='_blank'>
              bbc.com
            </ContentLink>{' '}
            for more details...
          </p>
          <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.skysports.com/f1/news/12433/12025040/lewis-hamilton-f1-can-learn-from-other-sports-on-showing-united-front'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
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
