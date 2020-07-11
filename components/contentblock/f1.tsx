import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://s3-eu-west-1.amazonaws.com/crash.net/styles/large_article/s3/image_importer/F1/1-1594392945.jpg?itok=VMlFFRaq'
          alt='Daniel Ricciardo limping following the massive accident during FP2'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Formula1.com
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.vettel-says-hed-take-red-bull-seat-if-offered-but-verstappen-would-prefer-to.6rC5OsifstIe237yLfl2FT.html'
            target='_blank'>
            Qualifying: Hamilton beats Verstappen to pole by 1.2s with epic lap
            in the wet
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            It’s on days like this, when rain creates tricky driving conditions,
            that the great drivers come to the fore – and as if we needed
            further reminding, Lewis Hamilton showed us why he is arguably the
            greatest driver in Formula 1 history with a scintillating lap at the
            Red Bull Ring to beat the heir to his throne Max Verstappen to pole
            by a staggering 1.2s for the Styrian Grand Prix.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Wet weather raised doubts as to whether qualifying would happen at
            all on Saturday, with final free practice cancelled because of the
            treacherous conditions, but there was a window of opportunity when
            the rain eased to the point where the Race Director Michael Masi
            deemed it safe to get the session under way.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            With the track remaining wet throughout, full wet Pirelli tyres were
            the compound of choice, and the drivers opted to fill up with a
            little more fuel than usual so they could complete a flurry of laps
            in quick succession. But there were two drivers who looked the most
            comfortable out there – Hamilton and Verstappen.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.vettel-says-hed-take-red-bull-seat-if-offered-but-verstappen-would-prefer-to.6rC5OsifstIe237yLfl2FT.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
          <div className='w-full text-sm md:w-3/12 pb-2 md:pb-0 md:pr-4'>
            Follow this topic on -
          </div>
          <div className='w-full flex flex-row justify-center md:justify-start md:w-9/12'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53374508'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded'
                  src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/styrian-grand-prix-qualifying-results/4831163/'
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
                href='https://www.skysports.com/f1/news/12433/12026326/styrian-gp-qualifying-lewis-hamilton-claims-wet-weather-pole-position'
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
                href='https://www.autosport.com/f1/news/150496/hamilton-storms-to-pole-in-wet-styrian-gp-qualifying'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded'
                  src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                  alt='autosport.com'
                />
              </ActionLink>
            </div>
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.espn.in/f1/story/_/id/29438233/mugello-host-first-f1-race-sochi-added-2020-calendar'
                target='_blank'>
                <img
                  className='w-auto h-8 object-contain rounded'
                  src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                  alt='espn.com'
                />
              </ActionLink>
            </div> */}
            <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/lewis-hamilton-takes-pole-in-wet-styrian-grand-prix-qualifying-report/'
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
                href='https://www.grandprix247.com/2020/07/11/styria-qualifying-2020/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-3 object-contain rounded border border-gray-200'
                  src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/qualifying-report-styrian-gp-2020/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-2 object-contain rounded border border-gray-200'
                  src='https://www.planetf1.com/content/themes/planet/img/svg/logo.svg'
                  alt='planetf1.com'
                />
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default F1
