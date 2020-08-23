import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative mt-0'>
      <div className='h-32 sm:h-48 w-full bg-white-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl p-12 border-b border-gray-200'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
          alt='planetf1.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.planetf1.com/news/helmut-marko-daniil-kvyat-underperforming/'
            target='_blank'>
            Marko: Kvyat ‘not performing as expected’
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Boss of the Red Bull driver programme Helmut Marko says Daniil Kvyat
            is underperforming, but he won’t be replaced yet. Kvyat was recalled
            to the Red Bull programme ahead of the 2019 season and received a
            seat at Toro Rosso, finishing on the podium at the German Grand
            Prix.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Russian driver scored 37 points that season, but so far 2020 has
            been a disappointing sequel. Six races in to the team’s new era as
            AlphaTauri Kvyat has scored only two points, whilst team-mate Pierre
            Gasly has put 14 on the board.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Gasly has also outqualified Kvyat at every race so far this season.
            It’s well known by now that Red Bull don’t really do patience when
            it comes to their drivers, meaning rumours have started to bubble up
            about Kvyat possibly being dropped by Red Bull for a second time.
            But whilst Marko confirmed that Kvyat isn’t doing the job expected
            of him, there are no immediate plans to drop the three-time podium
            finisher. “Yes, Daniil does not perform as we expected,” Marko is
            quoted by GPToday.net as having told Austrian newspaper Salzburger
            Nachrichten. “But we are still just before halfway in the season.”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/news/helmut-marko-daniil-kvyat-underperforming/'
              target='_blank'>
              planetf1.com
            </ContentLink>{' '}
            for More Details...
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
