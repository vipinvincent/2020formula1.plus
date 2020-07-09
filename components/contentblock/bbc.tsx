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
            href='https://www.bbc.com/sport/formula1/53341541'
            target='_blank'>
            Fernando Alonso: Renault have discussed Spaniard's reputation for
            outspokenness
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Renault say they discussed Fernando Alonso's reputation for
            outspokenness with him before signing the two-time champion to
            return to F1 in 2021.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Team boss Cyril Abiteboul said a break from the "toxic" F1
            environment had been "important" for the Spaniard.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Abiteboul said Renault had focused on "making sure we don't let him
            down by over-promising and under-delivering". Two-time world
            champion Alonso's willingness to speak his mind about the position
            of his current team has caused tension at times in his career.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.bbc.com/sport/formula1/53341541'
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
                  href='https://www.motorsport.com/f1/news/alonso-renault-abiteboul-toxic-2021/4828636/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-22'
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
                  href='https://www.skysports.com/f1/news/12433/12024236/fernando-alonso-f1-return-renault-boss-expecting-new-driver-in-2021'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                    alt='skysports.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.autosport.com/f1/news/150432/alonso-has-shaken-toxic-baggage-of-last-f1-spell'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                    alt='autosport.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.espn.in/f1/story/_/id/29432844/fernando-alonso-become-better-driver-leaving-f1'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                    alt='espn.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.planetf1.com/news/renault-will-be-transparent-with-toxic-free-alonso/'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 p-2 object-contain rounded border border-gray-200'
                    src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
                    alt='planetf1.com'
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
