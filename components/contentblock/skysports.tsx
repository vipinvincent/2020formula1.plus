import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const SkySports: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-skysports'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
          alt='skysports.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            skysports.com
          </div>
          <ActionLink
            href='https://www.skysports.com/f1/news/12433/12027547/styrian-gp-driver-ratings'
            target='_blank'>
            Styrian GP driver ratings
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            It was vintage Lewis Hamilton, with starring race-day roles from Max
            Verstappen and Sergio Perez. Rating all 20 drivers after Austria,
            round two.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lewis Hamilton Qualified 1st, Finished 1st Now Lewis Hamilton's
            quest for that seventh world title is properly up and running. If
            the dominant and seemingly serene race-day performance that took the
            Mercedes driver to the 85th win of his career could be described as
            'textbook' - at least by the six-time champion's standards - no
            manual would have told you quite how Hamilton conjured up pole
            position by 1.2 seconds in those atrocious wet conditions of
            qualifying.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Valtteri Bottas Qualified 4th, Finished 2nd A step back for Valtteri
            Bottas, considering his perfect start to the season a week before.
            Bottas was a whopping 1.4s off Hamilton in qualifying in the same
            Mercedes car - with his reasons for the margin ranging from not
            "building enough temperature into my tyres" to "glazing brakes".
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news/12433/12027547/styrian-gp-driver-ratings'
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
                      src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/icon_ufqtuk.png'
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
                      src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
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
                      src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
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
