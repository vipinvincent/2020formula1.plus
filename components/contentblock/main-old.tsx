import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Main: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <div className='h-48 md:h-64 xl:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595179123/contentImages/content/hamilton_zjzo65.jpg'
          alt='Bottas leads  thetime sheet with Hamilton and Perez second and third in the final practice session in Hungary'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race - Hungarian Grand Prix 2020
          </div>
          <H1>
            Hamilton clinches his 'EIGHTH' Hungarian Grand Prix win, with
            Verstappen in second and Bothas in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes’ Lewis Hamilton wins eighth Hungarian Grand Prix victory
            and he is now tied with Michael Schumacher’s record for most number
            of wins at a single venue. Starting from pole, Hamilton quickly
            build a comfortable lead in the early laps. He miraculously managed
            the medium tyres and his pace over his rivals in the race at the
            Hungaroring. At the chequered flag he was having a comfortable 8.7s
            lead to Verstappen and sealed his hat-trick win at Hungaroring.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Verstappen had an embarrassing crash into the Turn 12 wall on his
            lap to the grid that required some urgent repairs. But an
            extraordinary effort by his crew, completed the full repair in time
            made Max feel the car as 'Brand New'. ‘Second feels like a win’ says
            Verstappen at post race as he had to recover from the crash and the
            Dutchman had to hold off the vicious attack by third place Valtteri
            Bottas in the final stages of the race.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point’s Lance Stroll couldn’t convert his P3 grid position
            into the team’s first podium of the year as he came home a distant
            fourth. His teammate Perez also coudn't keep the second row start,
            but only able to finish at 7th after a poor start. The rejuvenated
            Red Bull’s Alex Albon late pass on the Ferrari of Sebastian Vettel
            gave Albon P5, who started who started 13th. although Red Bull were
            summoned to the stewards after the race for allegedly drying Albon’s
            grid spot ahead of the race start. Vettel finished at P6 and hold
            off the second Racing Point of Sergio Perez in the final laps of the
            race.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Renault's Daniel Ricciardo had an impressive P8 with a remarkable
            tyre managed race. An inspired strategy from Haas helped Kevin
            Magnussen take the team’s first points of the year, with Magnussen
            and Romain Grosjean pitting for slicks at the end of the formation
            lap as their rivals started on intermediates on the drying track.
            Kevin finished P9 and Grosjean P15. Best of the McLarens was Carlos
            Sainz who finished P10, thanks to a late-race pass on the Ferrari's
            Charles Leclerc, who ended up 11th. His teammate Lando Norris, only
            could manage P13.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Alpha Tauri's Daniil Kvyat finished P12 with his teammate Pierre
            Gasly had to retire his car with smoking engine, who was the sole
            retirement of the race.{' '}
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Renault's Esteban Ocon finished P14 with two Alfa Romeos finishing
            at P16(Kimi)and P17(Giovinazzi). Williams could not replicate the
            majestic form in the qualifying, finished a disappointing 18th and
            19th, with George leading his teammate Latifi.{' '}
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
