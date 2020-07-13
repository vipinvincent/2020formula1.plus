import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const SkySports: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-skysports'
          src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
          alt='skysports.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            skysports.com
          </div>
          <ActionLink
            href='https://www.skysports.com/f1/news/12433/12027120/ferrari-implode-at-styrian-gp-after-charles-leclerc-sebastian-vettel-collide'
            target='_blank'>
            Lando Norris after passing three in final Styrian GP laps: 'My best
            race'
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lando Norris hailed the Styrian GP as his best race in Formula 1
            after the young Brit enjoyed another incredible finish, passing
            three cars in the final two laps, to take fifth for McLaren.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Norris was running eighth heading into Lap 70 of 71 but overtook
            both Daniel Ricciardo and Lance Stroll as they scrapped for
            position, before taking advantage of Sergio Perez's damaged car to
            pick off another Racing Point.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The 10 points mean Norris is a brilliant third in the championship,
            as his charge came just a week after he secured his first F1 podium
            with a fastest lap of the race on his last effort at the same
            Spielberg circuit. "It was a a really good race for me, probably my
            best one I've done in Formula 1," Norris, 20, told Sky F1's Rachel
            Brookes.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news/12433/12027120/ferrari-implode-at-styrian-gp-after-charles-leclerc-sebastian-vettel-collide'
              target='_blank'>
              skysports.com
            </ContentLink>{' '}
            for more details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='w-full flex flex-row justify-center my-1'>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.formula1.com/en/latest/article.charles-leclerc-hit-with-three-place-grid-penalty-for-styrian-grand-prix.5WZl6mpWdKvacCkzIDROiN.html'
                    target='_blank'>
                    <img
                      className='w-auto h-8 object-contain rounded border border-gray-300'
                      src='https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/f94/image/f940178e6c76f7c28047a26b1704ba0f.jpg'
                      alt='f1.com'
                    />
                  </ActionLink>
                </div>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.motorsport.com/f1/news/leclerc-grid-penalty-styrian-grand-prix/4831419/'
                    target='_blank'>
                    <img
                      className='w-auto h-8 object-contain rounded'
                      src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                      alt='motorsport.com'
                    />
                  </ActionLink>
                </div>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.autosport.com/f1/news/150505/leclerc-to-start-14th-after-blocking-grid-penalty'
                    target='_blank'>
                    <img
                      className='w-auto h-8 object-contain rounded'
                      src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                      alt='autosport.com'
                    />
                  </ActionLink>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default SkySports
