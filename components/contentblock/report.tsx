import React from 'react'
import H1 from 'components/heading/H1'
import Zoom from 'react-medium-image-zoom'

const Main: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490309/contentImages/content/lewis-hamilton_oavnow.jpg'
          alt='Race REPORT - BELGIAN GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - BELGIAN GP 2020
          </div>
          <H1>
            Hamilton dominates and wins his fourth win at Spa with Mercedes 1-2
            finish as Verstappen finished in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes’ Lewis Hamilton from the pole. leading every lap, took
            fifth victory of the season at the Belgian Grand Prix. Meanwhile his
            team mate Valtteri Bottas couldn’t overcome the first lap
            slipstreaming contest down to Les Combes, only to cross the line in
            second as Red Bull’s Max Verstappen took third to maintain his
            record of finishing on the podium in each race of 2020 season.
            Bottas finished eight seconds behind his team mate, with Verstappen
            a further seven seconds in P3.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Renault’s Daniel Ricciardo finished fourth which was the team’s best
            of the year, crossed the line under four seconds behind Verstappen
            with the last lap fastest lap point. His team mate Esteban Ocon also
            impressed by overtaking the struggling Red Bull of Alex Albon on the
            final lap to take fifth. Albon could hold onto sixth from the
            McLaren of Lando Norris who finished under 1 second from the Red
            Bull car. An impressive drive aided with a good strategy helped
            Pierre Gasly to take eighth for AlphaTauri. Meanwhile the Spa
            specialists Racing Points, could only manage P9 and P10 with Lance
            Stroll leading Sergio Perez rounded top 10.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The second Alpha Tauri of Daniil Kvyat finished eleventh with Kimi
            Räikkönen of Alfa Romeo in twelfth. Notably Kimi finished ahead of
            both the Ferrari drivers Sebastian Vettel and Charles Leclerc who
            finished out of the points in P13 and P14 respectively. It was a
            extremely frustrating Spa weekend for ferrari with tough qualifying
            followed up by an equally burdensome race, with the team’s cars
            coming home in the positions they’d started in, but Sebastian Vettel
            having moved ahead of Charles Leclerc. Both Haas drivers crossed the
            line in 15th and 17th with Romain Grosjean leading his team mate
            Kevin Magnussen. Nicholas Latifi of Williams spitted the Haas
            drivers and finished 16th. McLaren’s Carlos Sainz was unable to take
            the race start after a power unit issue, Meanwhile a big crash for
            Alfa Romeo’s Antonio Giovinazzi ended his race in lap 11, with
            Williams’ George Russell arriving on the scene and hitting
            Giovinazzi’s wheel, which forced his own retirement. Luckily both
            drivers emerged unhurt.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Check out the positions of Top-5 drivers at the time Hamilton
            crossing the finish line.
          </p>
          <div className='h-full w-full zoom-image'>
            <Zoom>
              <img
                className='w-full h-full object-cover rounded-tl-xxl'
                src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1598860581/contentImages/content/spa_fj1j8u.png'
                alt='Check out the positions of top5 drivers when Hamilton crossing the finish line!!!!'
              />
            </Zoom>
          </div>
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
export default Main
