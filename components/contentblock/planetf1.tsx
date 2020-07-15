import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-white-50 p-8'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
          alt='planetf1.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            planetf1.com
          </div>
          <ActionLink
            href='https://www.planetf1.com/features/styrian-grand-prix-conclusions/'
            target='_blank'>
            Conclusions from the Styrian Grand Prix
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lewis Hamilton got his mojo back, cruising to a dominant Styrian
            Grand Prix triumph as Ferrari imploded again with a self-inflicted
            double retirement on the opening lap.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Hamilton fires on all cylinders Doubts had been expressed about the
            six-time World Champion’s form before a spectacular qualifying
            performance in the wet – and Sunday showed he remains very much at
            his peak.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            At 35 years of age and as one of the elder statesmen on the grid,
            there may come a point when Hamilton is evidently past his best as a
            racer. Some were even daring to think that time could be now, given
            the previous weekend’s disappointment, a comparatively lacklustre
            Friday practice outing and the perceived distractions.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/features/styrian-grand-prix-conclusions/'
              target='_blank'>
              planetf1.com
            </ContentLink>{' '}
            for more details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.motorsport.com/f1/news/williams-wolff-shareholding-mercedes/4830004/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-6'
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
                  href='https://www.autosport.com/f1/news/150472/williams-explains-wolff-shareholding-in-team'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
                    alt='autosport.com'
                  />
                </ActionLink>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default PlanetF1
