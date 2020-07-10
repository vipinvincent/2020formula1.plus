import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const AutoSport: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-autosports'
          src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
          alt='autosport.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            autosport.com
          </div>
          <ActionLink
            href='https://www.autosport.com/f1/news/150474/racing-point-has-no-space-for-vettel--szafnauer'
            target='_blank'>
            Racing Point has no space for Sebastian Vettel in 2021 - Szafnauer
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Racing Point is clear that there is 'no space' at its Formula 1 team
            for Sebastian Vettel next year, despite the German continuing to be
            linked with the squad.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            With Vettel not being retained by Ferrari for 2021, his options for
            staying on in F1 are narrowing, with Renault this week shutting the
            door on him and signing Fernando Alonso.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Vettel has said that he would consider returning to Red Bull if an
            offer was made, but while Mercedes and Red Bull have yet to fully
            commit to their line-ups for next year, both teams have indicated in
            recent days that they are almost certain to retain their current
            drivers. Red Bull team principal Christian Horner told Sky F1 that
            signing Vettel was a "definite no".
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/150474/racing-point-has-no-space-for-vettel--szafnauer'
              target='_blank'>
              autosport.com
            </ContentLink>{' '}
            for more details...
          </p>
          <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.formula1.com/en/latest/article.racing-point-dont-have-space-for-vettel-in-2021-says-szafnauer.1xIcoT6yFDRBjGLh6xeDaQ.html'
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
                  href='https://www.motorsport.com/f1/news/racing-point-no-space-vettel-2021/4830027/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-6'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                    alt='motorsport.com'
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
export default AutoSport
