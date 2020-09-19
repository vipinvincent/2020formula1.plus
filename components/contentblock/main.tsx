import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Main: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1600502284/contentImages/content/race-grid_pch5pi.jpg'
          alt='How’s drivers market shaping up at mid of 2020 season'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <H1>How is the driver's market shaping up at mid of 2020 season</H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            As the 2020 season proceeds to the second half, the driver’s market
            is shaping up interestingly. Most of the teams has already finalized
            the driver line up for 2020 and beyond, some teams are yet to wrap
            up their decision. Main teams like Mercedes, Ferrari, Red Bull,
            Renault, McLaren Racing point and Williams already published their
            2020 drivers, teams like Haas, Alpha Tauri and Alfa Romeo are yet to
            announce their final selection. Teams like Mercedes, Red Bull and
            Williams will be moving along with the same line up, some teams like
            Renault, McLaren and Racing Point decided to retain one of their two
            drivers along with a new driver in their lineup. Now the focus
            shifts to the teams who is yet to announce their 2020 driver line
            up.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Alfa Romeo is one of the team to finalize their drivers for 2021,
            they have some interesting precepts to consider. Alfa Romeo team
            boss Frederic Vasseur says the team’s first choice of driver for
            2021 season is Kimi Raikkonen, if the Finn wants to continue. With
            his two-year contract at Alfa Romeo expiring at the end of this
            season, there’s a big question mark over whether the Finn, as the
            oldest and most experienced driver on the grid, has any desire to
            continue racing as the team are struggling to escape the lower
            midfield. Asked whether the team would keep him on if Kimi indicates
            he wants to stay, Vasseur said: “Yeah, sure, but if we are all
            interested to collaborate and the collaboration is good, it will
            make sense to continue.” Meanwhile, Antonio Giovinazzi, whose
            contract also concludes by the end this year, is under threat from
            the rising stars of the Ferrari Driver Academy as Formula 2
            championship leader Mick Schumacher is rumored to be set for Alfa
            tests and is a possible shoe-in for a race seat.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Haas is yet another team to anounce their 2020 drivers, the prospect
            of availability experienced drivers like Sergio Perez, Nico
            Hulkenberg etc. and the young F2 drivers like Mick Schumacher,
            Callum Ilott and Robert Schwartzman put the team in an interesting
            situation. “Everybody who is on the market is considered,” said
            Steiner of his 2021 plans. “We lay everything on the table and then
            we see what we want. But it’s a general question. What do we want to
            do? Do we want to keep the drivers that we’ve got? Do we want
            experienced drivers? Do we want to start with young drivers? Do we
            do a mix of it? Everything is on the table. Nothing changes. As Haas
            move into sixth campaign, they could retain the current drivers or
            they could recruit experience with Sergio Perez now available along
            with his former team mate Nico Hulkenberg. Even they could work with
            Ferrari as is the case over at Alfa Romeo, they could opt for young
            blood from F2 and use one or two of the Ferrari Academy drivers and
            try a new reign in the midfield.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Alpha Tauri, is another team to announce their team line up. As it
            seems Red Bull has kind of finalized their team line up, the sister
            team is not expecting any big surprises. The race victory of Pierre
            Gasly at Monza, cements his place in the team. Now the only decision
            pending is about Daniil Kvyat. As like Haas, the Italian team too
            have multiple options either to stick rather than twist with the
            currents set of drivers or go with a new driver line up. If they are
            planning for a change in driver line up they could either go with
            experienced drivers like Sergio Perez or young F2 drivers like Yuki
            Tsunoda from Red Bull Junior Team. So, it will be interesting to see
            how second half of 2020 season will progress as this will help teams
            and drivers to finalize their destination for the 2021 season and
            the 2022 season with significant changes in the sport's technical
            regulations.
          </p>
          {/* <p className='mt-1 text-base leading-normal text-gray-700'>
            View the complete {' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.we-havent-seen-the-full-potential-of-mercedes-or-red-bull-yet-says-wolff.4hSJsAzStntPh9H8WI6fDQ.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            Qualifying results
          </p> */}
        </div>
        {/*  <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
          <div className='w-full text-sm md:w-3/12 pb-4 md:pb-0 md:pr-4 leading-tight pt-2 md:pt-4'>
            Follow this topic on -
          </div>
           <div className='w-full flex flex-row justify-center md:justify-start md:w-9/12'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.formula1.com/en/latest/article.fp3-bottas-leads-hamilton-and-perez-as-verstappen-spins-in-final-practice.4eRTHeO9GkMMYh9vxRnOmc.html'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-300'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/formula1_qd0yzg.jpg'
                  alt='f1.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53449276'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
            <ActionLink
              href='https://www.motorsport.com/f1/news/horner-one-stop-races-boring/4866469/'
              target='_blank'>
              <img
                className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                alt='motorsport.com'
              />
            </ActionLink>
          </div> */}
        {/*  <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12031161/hungarian-gp-practice-three-valtteri-bottas-fastest-from-lewis-hamilton'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/skysports_ruuxud.png'
                  alt='skysports.com'
                />
              </ActionLink>
            </div>*/}
        {/* <div className='mr-2'>
            <ActionLink
              href='https://www.autosport.com/f1/news/151806/horner-onestop-races-to-blame-for-dull-f1'
              target='_blank'>
              <img
                className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
                alt='autosport.com'
              />
            </ActionLink>
          </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.espn.in/f1/story/_/id/29438233/mugello-host-first-f1-race-sochi-added-2020-calendar'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826931/contentImages/logo/espn_av2iv1.png'
                  alt='espn.com'
                />
              </ActionLink>
            </div>*/}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/hamilton-tops-first-hungary-practice-while-red-bull-toils/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg bg-gray-800'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/therace_cq3ao6.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/15/report-vettel-in-negotiations-with-aston-martin/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 mt-0 py-4 md:py-6 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/grandprix247_yj6fcw.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div>*/}
        {/* <div className='mr-2'>
            <ActionLink
              href='https://www.planetf1.com/news/christian-horner-boring-one-stops/'
              target='_blank'>
              <img
                className='w-auto  h-6 md:h-12 mt-0 p-3 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
                alt='planetf1.com'
              />
            </ActionLink>
          </div>
        </div> */}
      </div>
    </div>
  )
}
export default Main
