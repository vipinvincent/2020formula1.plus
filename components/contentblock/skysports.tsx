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
        <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            skysports.com
          </div>
          <ActionLink
            href='https://www.skysports.com/f1/news/12433/12025678/lando-norris-collects-grid-penalty-for-styrian-gp-after-rules-breach'
            target='_blank'>
            Lando Norris collects grid penalty for Styrian GP after rules breach
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Last Sunday's podium finisher to drop down Sunday's grid from where
            he qualifies after overtaking Gasly under yellow flags in P1.
            McLaren Lando Norris has picked up a three-place grid penalty for
            overtaking under yellow flags at the Styrian GP.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Last week's third-place finisher will carry the penalty into
            Saturday's qualifying session after being found guilty of passing
            Pierre Gasly's AlphaTauri at Turn Five when the yellow flags were
            showing during Practice One.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            "The Stewards heard from the driver of Car 4 (Lando Norris) and the
            team representative and have reviewed video evidence," read a
            stewards' statement. "On-board footage clearly shows that driver of
            Car 4 passed Car 10 while yellow light panels were clearly visible
            and yellow flags were shown."
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.skysports.com/f1/news/12433/12025678/lando-norris-collects-grid-penalty-for-styrian-gp-after-rules-breach'
              target='_blank'>
              skysports.com
            </ContentLink>{' '}
            for more details...
          </p>
          <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='w-full flex flex-row justify-center my-1'>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.formula1.com/en/latest/article.norris-handed-styrian-gp-grid-penalty-for-fp1-yellow-flag-infraction.5QfUaE1MCFeMd61tswxXaw.html'
                    target='_blank'>
                    <img
                      className='w-auto ull h-8 object-contain rounded border border-gray-300'
                      src='https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/f94/image/f940178e6c76f7c28047a26b1704ba0f.jpg'
                      alt='f1.com'
                    />
                  </ActionLink>
                </div>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.motorsport.com/f1/news/norris-handed-grid-penalty-for-yellow-flag-incident/4830040/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-6'
                    target='_blank'>
                    <img
                      className='w-auto ull h-8 object-contain rounded'
                      src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                      alt='motorsport.com'
                    />
                  </ActionLink>
                </div>
                <div className='mr-2'>
                  <ActionLink
                    href='https://www.autosport.com/f1/news/150473/norris-gets-threeplace-f1-grid-drop-for-styrian-gp'
                    target='_blank'>
                    <img
                      className='w-auto ull h-8 object-contain rounded'
                      src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                      alt='autosport.com'
                    />
                  </ActionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SkySports
