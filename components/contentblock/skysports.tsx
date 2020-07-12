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
            Ferrari implode at Styrian GP after Charles Leclerc, Sebastian
            Vettel collide
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari's early-season woes deepen after both cars crash together on
            the first lap; Leclerc takes full responsibility for 'too
            optimistic' move on team-mate
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Charles Leclerc apologised to Sebastian Vettel and admitted he "put
            all the efforts of the team in the bin" after crashing into his
            team-mate on the opening lap of the Styrian GP to further compound
            Ferrari's torrid start to the new season.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Ferraris came together on the first run to Turn Three, with
            Leclerc attempting to go down the inside of Vettel but clipping the
            kerb and being pitched into a collision with the sister car.
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
