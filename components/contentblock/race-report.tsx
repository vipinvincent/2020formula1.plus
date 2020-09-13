import React from 'react'
import H1 from 'components/heading/H1'
// import Zoom from 'react-medium-image-zoom'

const RaceReport: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1600015739/contentImages/content/albon-podium_btdchl.jpg'
          alt='Race REPORT - Tuscan GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - Tuscan GP 2020
          </div>
          <H1>
            After two red flag stoppages at Mugello, Hamilton wins the first
            ever Tuscan GP with Bottas in second as Alex Albon secures his
            maiden podium.
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton take victory at Mugello in an absolute thriller with
            Mercedes team scored yet another Merceres 1-2 in Ferrari’s 1000 GP
            race. The action-packed race witnessed multi-car crashes within the
            first 10 laps, two red flag stoppages and an exciting sprint race
            like finish helped Alex Albon score his first F1 podium. Valtheri
            Bottas for Mercedes only could manage a second, after a great start
            in the be first stint and eventually finised +4.880s behind
            Hamilton. Meanwhile, Albon pulled off a fantastic move on Renault’s
            Daniel Ricciardo in the last part of the race to claim an important
            third for Red Bull, after his team mate retired the race in the
            first lap incident. Ricciardo come home in fourth, tantalisingly
            close to his first podium with Renaultas Sergio Perez finished fifth
            for Racing Point.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lando Norris finished in sixth for McLaren, ahead of the AlphaTauri
            of Daniil Kvyat in P7. Ferrari’s Charles Leclerc classified eighth
            at the team’s 1000th GP. Alfa Romeo’s Kimi Raikkonen crossed the
            line in eighth but classified as ninth after receiving a five-second
            race penalty for crossing the line at pit entry. The second Ferrari
            of Sebastian Vettel finished in points rounding out the top 10.
            Williams’ George Russell finished in 11th, agonizingly close to the
            team’s first point finish of the year, as he was running ninth in
            the last restart after the second red flag of the race. Haas’ Romain
            Grosjean finished 12th of the 12 runners classified.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point’s Lance Stroll went off at Arrabbiata 2 while holding
            fourth place on lap 43 and crashed into the tyre barriers which
            brings out the Safety Car and later red flagged as the barriers
            needs to be checked and repaired. Replays show that Stroll may have
            picked up a rear tyre puncture, the Canadian helpless as the rear
            slides away and he flies through the gravel and into the barriers.
            Earlier, in the beginning of the race Verstappen dropped back after
            just a poor start, and behind Gasly was squeezed between a Raikkonen
            and Grosjean sandwich. Those three battling came up to the Red Bull
            to punt him out the race. Last week’s race winner Gasly also had to
            retire early after the incident with Max as he too wound up in the
            gravel. This brings the first safety car and the race restarted on 7
            as Sainz, Giovinazzi and Magnussen have all collided and are parked
            up on the main straight on the restart brining red flags. Replays
            show that Magnussen was going very slowly at the restart. Giovinazzi
            was straight in the back of him, and then those two collected Sainz
            and Latifi. Esteban also had to retire his car due to brake
            overheating during red flag period.
          </p>
          {/* <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Check out the positions of Top-5 drivers at the time Hamilton
            crossing the finish line.
          </p> */}
          {/* <div className='h-full w-full zoom-image'>
            <Zoom>
              <img
                className='w-full h-full object-cover rounded-tl-xxl'
                src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1598860581/contentImages/content/spa_fj1j8u.png'
                alt='Check out the positions of top5 drivers when Hamilton crossing the finish line!!!!'
              />
            </Zoom>
          </div> */}
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
        {/* <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
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
                href='https://www.motorsport.com/f1/news/hungarian-gp-fp3-report-bottas/4838964/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12031161/hungarian-gp-practice-three-valtteri-bottas-fastest-from-lewis-hamilton'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/skysports_ruuxud.png'
                  alt='skysports.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150669/bottas-edges-hamilton-in-final-practice'
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
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/gerhard-berger-sebastian-vettel-aston-martin/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 mt-0 py-4 md:py-6 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
                  alt='planetf1.com'
                />
              </ActionLink>
            </div> */}
        {/* </div>
        </div> */}
      </div>
    </div>
  )
}
export default RaceReport
