import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const MotorSport: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3 bg-black-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl'
          src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
          alt='motorsport.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            motorsport.com
          </div>
          <ActionLink
            href='https://www.motorsport.com/f1/news/renault-racing-point-mercedes-protest/4832791/'
            target='_blank'>
            Stewards rule Renault’s Racing Point protest “admissible”
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The FIA stewards at the Styrian Grand Prix have declared a protest
            submitted by the Renault Formula 1 team against the two Racing Point
            cars of Sergio Perez and Lance Stroll as admissible, and it will be
            ruled upon when the evidence has been gathered.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The protest concerned Appendix 6 of the FIA sporting regulations,
            which relates to listed parts, and what can and cannot be shared
            between teams. It relates specifically to the front and rear brake
            ducts used by the Racing Point RP20, which Renault clearly believes
            are more similar to those used on last year’s Mercedes W10 than the
            rules allow.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            In stark contrast to the protest made last week by Red Bull Racing
            on the subject of the Mercedes DAS system, which was submitted on a
            Friday and thus did not affect qualifying or the race, Renault took
            action after today’s Styrian GP.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.motorsport.com/f1/news/renault-racing-point-mercedes-protest/4832791/'
              target='_blank'>
              motorsport.com
            </ContentLink>{' '}
            for more details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'> */}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://www.autosport.com/f1/news/150497/leclerc-faces-double-investigation-after-qualifying'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                    alt='autosport.com'
                  />
                </ActionLink>
              </div>
             <div className='mr-2'>
                <ActionLink
                  href='https://www.formula1.com/en/latest/article.ferrari-is-like-a-different-car-on-high-fuel-after-new-upgrades-says-vettel.6XkXtzZbL6XvBQh82lXjSU.html'
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
                  href='https://www.skysports.com/f1/news/12433/12025894/ferrari-styrian-gp-upgrade-sebastian-vettel-charles-leclercs-verdicts'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                    alt='skysports.com'
                  />
                </ActionLink>
              </div>*/}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://www.autosport.com/f1/news/150506/williams-frustrated-by-q3-nearmiss-in-styrian-gp'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                    alt='autosport.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://the-race.com/formula-1/how-williams-almost-reached-q3/'
                  target='_blank'>
                  <img
                    className='w-auto h-8 mt-0 p-2 object-contain rounded bg-gray-800'
                    src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                    alt='the-race.com'
                  />
                </ActionLink>
              </div> */}
          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default MotorSport
