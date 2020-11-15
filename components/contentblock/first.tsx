import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <div className='h-48 md:h-64 xl:h-104  w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1605447260/contentImages/content/lewis-hamilton_jt3fbq.jpg'
          alt='Race REPORT - Turkish  GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - Turkish GP 2020
          </div>
          <H1>
            Lewis Hamilton wins 2020 Turkish GP and clinches the 2020 Formula 1
            world title, equalling the record of Michael Schumacher
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton claimed the record equalling seventh drivers title
            with a stunning win in a wet and wild Turkish Grand Prix. Starting
            from sixth on the grid, Hamilton with his gut instincts and
            dominating driving shown the world how champions are made. After
            leading the race for most of the laps the pole sitter Lance Stroll
            couldn’t convert his P1 to a race win and eventually ended his race
            in ninth position. Behind Hamilton, Sergio Perez and Sebastian
            Vettel claimed their first podium of the season. A dramatic last lap
            saw Ferrari’s Charles Leclerc overtook Perez for P2, but got it
            wrong at Turn 12, with Perez retaking second as Vettel made it
            through on his team mate and finished third.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Leclerc crossed the line in fourth position ahead of the McLaren of
            Carlos Sainz. Red Bull on their 300 race start only managed P5 and
            P6 with Max Verstappen leading his team mate Alex Albon at the flag.
            Max and Alex who was in podium places during the first stint on race
            later got it wrong during the tricky second pit stop time, assisted
            with multiple spins. The second McLaren of Lando Norris finished P7
            after a brave drive with multiple brave overtaking manoeuvres. The
            Renault duo Riccardo and Ocon behind Norris in P10 and P11.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Daniil Kvyat and Pierre Gasly of Alfa Tauri crosses the line next in
            P12 and P13 ahead of Valtteri Bottas, who had a terrible race with
            multiple spins. Kimi Räikkönen and Geroge Russel in P15 and P16
            rounds off the classified drivers in 2020 Turkey GP. Both Haas
            drivers Kevin Magnussen and Romain Grosjean after suffering mid race
            collisions and multiple spins forced them to retire the race along
            with William’s’ Nicholas Latifi. Giovinazzi is the fisrt person to
            retire the race due to a mechanical issue which bought two-lap
            Virtual Safety Car out on Lap 13, surprisingly was the only VSC/SC
            incident of the race.
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
export default First
