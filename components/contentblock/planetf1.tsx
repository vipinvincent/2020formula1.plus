import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-white-50 p-8'
          src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
          alt='planetf1.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            planetf1.com
          </div>
          <ActionLink
            href='https://www.planetf1.com/news/sergio-perez-q1-exit-styrian-gp/'
            target='_blank'>
            Perez: Tyre temps behind ‘disappointing’ Q1 exit
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Racing Point’s Sergio Perez said his failure to generate enough tyre
            temperature caused his Q1 elimination at the Styrian GP. Perez had
            been talked about as a contender for pole ahead of qualifying for
            the Styrian GP, but nevermind pole, he wasn’t even able to make it
            out of the first session.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The RP20’s impressive pace went missing as the rain fell at the Red
            Bull Ring, leaving Perez P17 on the grid. The Mexican believed he
            had the pace for Q2, but said the late red flags after Antonio
            Giovinazzi’s incident caught him out after struggling to get the
            full wets up to temperature.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            “It’s a big disappointment,” he said. “You know we were on for a
            great weekend as we have great pace in the dry. But in the wet we
            couldn’t find our rhythm. “I struggled a lot to generate any tyre
            temperature. It took me two to three laps to generate the
            temperature and at the end I was coming on a good lap but then the
            red flag stopped that lap. There’s nothing we can do now other than
            think forward for tomorrow.”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/news/sergio-perez-q1-exit-styrian-gp/'
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
                    src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
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
                    src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
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
