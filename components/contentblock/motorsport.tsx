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
        <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            motorsport.com
          </div>
          <ActionLink
            href='https://www.motorsport.com/f1/news/explained-why-renault-launched-a-racing-point-protest/4833433/'
            target='_blank'>
            Explained: Why Renault launched a Racing Point protest
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The protest submitted by Renault against Racing Point after the
            Styrian GP came as no surprise, given how unhappy many of the rivals
            of the Silverstone team have been since the RP20 first emerged in
            Barcelona testing.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The impressive speed that the car has since shown on track, even if
            it hasn't yet translated into the results that its potential
            suggests, has further caught the attention of teams. In the Styrian
            GP, Sergio Perez started only 17th after a troubled wet qualifying,
            and yet by the end of the race he was trying – albeit unsuccessfully
            – to wrest fourth place from Red Bull's Alex Albon.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Mexican surprised rivals by keeping up a good pace even on
            ageing soft tyres, and by setting several fastest laps after
            switching to the mediums. Given that there has been talk of a
            protest since Barcelona the only surprise was that one didn't emerge
            at the first race in Austria.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.motorsport.com/f1/news/explained-why-renault-launched-a-racing-point-protest/4833433/'
              target='_blank'>
              motorsport.com
            </ContentLink>{' '}
            for more details...
          </p>
          <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.bbc.com/sport/formula1/53384460'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
                    alt='bbc.com/sport'
                  />
                </ActionLink>
              </div>
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
              </div>*/}
              <div className='mr-2'>
                <ActionLink
                  href='https://www.skysports.com/f1/news/12433/12027592/racing-point-hit-back-at-renault-over-protest-on-rp20-cars-legality'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                    alt='skysports.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.autosport.com/f1/news/150550/why-racing-point-brake-ducts-are-key-to-renault-protest'
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
                  href='https://www.espn.in/f1/story/_/id/29454408/racing-point-calls-renault-protest-misconceived-poorly-informed'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                    alt='espn.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://the-race.com/formula-1/video-why-renault-is-protesting-racing-point/'
                  target='_blank'>
                  <img
                    className='w-auto h-8 mt-0 p-2 object-contain rounded bg-gray-800'
                    src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                    alt='the-race.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.grandprix247.com/2020/07/13/racing-point-a-misconceived-and-poorly-informed-protest/'
                  target='_blank'>
                  <img
                    className='w-auto h-8 mt-0 p-3 object-contain rounded border border-gray-200'
                    src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
                    alt='grandprix247.com'
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
export default MotorSport
