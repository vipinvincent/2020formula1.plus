import React from 'react'
import H1 from 'components/heading/H1'
import ActionLink from 'components/link/ActionLink'

const Main: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://image-cdn.essentiallysports.com/wp-content/uploads/20200304124838/Sebastian-Vettel-5.jpg'
          alt='Vettel considering talks with Aston Martin F1???'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Latest News
          </div>
          <H1>Vettel considering talks with Aston Martin F1???</H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Sources indicated that the Ferrari driver Sebastian Vettel is
            considering a deal to join the Aston Martin Formula 1 team for the
            2021 season. Vettel will be out of contract with Ferrari at the end
            of the 2020 F1 season. Vettel has no competitive seats available for
            2021 season and looking for options to stay on the grid next season.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Earlier Mercedes retained Valtteri Bottas as a first priority to
            partner Lewis Hamilton , Red Bull represented the only leading
            option for Vettel. But Red Bull Formula 1 boss Christian Horner has
            ruled out Sebastian Vettel returning to the team, saying it is a
            “definite no” and Vettel is “aware of that”. With McLaren and
            Renault also already confirming their lineups for 2021, the only
            option left for him, is Racing Point, soon to become Aston Martin
            F1.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            As indicated by the german media a deal has been agreed upon by the
            Racing Point F1, courtesy of team owner Lawrence Stroll. The
            four-times world champion is understood to have been offered a
            contract by Lawrence Stroll, who is planning to build the strongest
            possible team for the rebranding of the team to Aston Martin.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Assuming the report is accurate, it will be intresting to see how
            the team will make room for Vettel as Racing point already has
            imperative drivers like Sergio Perez, who brings substantial
            sponsorship money to the team and Stroll’s son Lance Stroll, both
            under contract until 2022.
          </p>
          {/* <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.we-havent-seen-the-full-potential-of-mercedes-or-red-bull-yet-says-wolff.4hSJsAzStntPh9H8WI6fDQ.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for more details...
          </p> */}
        </div>
        <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
          <div className='w-full text-sm md:w-3/12 pb-4 md:pb-0 md:pr-4 leading-tight pt-2 md:pt-6'>
            Follow this topic on -
          </div>
          <div className='w-full flex flex-row justify-center md:justify-start md:w-9/12'>
            {/* <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53377338'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.16.6/images/bbc-sport-logo.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div> */}
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/vettel-aston-martin-deal-2021/4835200/'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12027684/sebastian-vettel-are-formula-1-2021-transfer-options-running-out'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                  alt='skysports.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150576/vettel-considering-aston-martin-offer-for-2021'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
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
                  className='w-auto h-12 md:h-16 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
                  alt='espn.com'
                />
              </ActionLink>
            </div>*/}
            <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/what-we-know-as-vettel-aston-martin-rumours-intensify/'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 mt-0 py-4 md:py-6 px-2 object-contain rounded-tl-lg rounded-br-lg bg-gray-800'
                  src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/15/report-vettel-in-negotiations-with-aston-martin/'
                target='_blank'>
                <img
                  className='w-auto  h-12 md:h-16 mt-0 py-4 md:py-6 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://www.grandprix247.com/wp-content/uploads/2019/12/gp247-2020-logo-1200.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/gerhard-berger-sebastian-vettel-aston-martin/'
                target='_blank'>
                <img
                  className='w-auto h-12 md:h-16 mt-0 py-4 md:py-6 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
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
export default Main
