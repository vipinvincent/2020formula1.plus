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
            href='https://www.autosport.com/f1/news/150404/kubica-gets-alfa-romeo-fp1-outing-at-styrian-gp'
            target='_blank'>
            Robert Kubica gets Alfa Romeo FP1 outing at F1 Styrian Grand Prix
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Robert Kubica will make his Formula 1 race weekend return with an
            opening practice outing for Alfa Romeo at this weekend's Styrian
            Grand Prix. Kubica, who left Williams at the end of his comeback
            campaign in 2019, is Alfa's reserve driver for the 2020 season. He
            will drive Antonio Giovinazzi's C39 in the first practice session at
            the Red Bull Ring on Friday. Kubica completed two half-day outings
            for Alfa during pre-season testing, ending up as the fastest driver
            on the opening morning of the second test.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/150404/kubica-gets-alfa-romeo-fp1-outing-at-styrian-gp'
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
                  href='https://www.motorsport.com/f1/news/kubica-f1-race-return-alfa/4827729/'
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
                  href='https://www.formula1.com/en/latest/article.robert-kubica-to-return-to-f1-action-with-fp1-run-for-alfa-romeo-in-austria.5flmN8g3mJhW0lxw4OP8u4.html'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded border border-gray-300'
                    src='https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/f94/image/f940178e6c76f7c28047a26b1704ba0f.jpg'
                    alt='f1.com'
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
