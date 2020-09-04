import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Right: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595072621/contentImages/content/valtteri_-bottas_m5dgbs.jpg'
          alt='FP1 REPORT - Italian GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP1 REPORT - Italian GP 2020
          </div>
          <H1>
            Bottas tops the First Practice session of 2020 Italian GP from
            Hamilton and Albon
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Valtteri Bottas leads the first practice session at Monza with a
            Mercedes’ one-two. Lewis Hamilton crosses the line in P2 which was
            0.245s slower than the lead driver. Red Bull’s Alex Albon finished
            third while his team mate Max Verstappen crashed and lost his front
            wing at the Ascari Chicane. Max spun while approaching into the exit
            of the chicane, careered over the kerbs, through the gravel and hit
            the barriers nose-first, causing a brief red flag. After swift
            repairs to his Red Bull, the Dutchman finished fifth on softs.
            Daniil Kvyat for AlphaTauri impressed with Fourth on medium tyres,
            which was 0.8s off the top and ahead of Verstappen by a tenth.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            AlphaTauri’s Pierre Gasly finished six for, as he was the last
            driver within a second of Bottas, also was on medium tyres. Later
            the Frenchman spun at the Turn 4 chicane at the end of the session,
            rolling backwards into the gravel as the chequered flag was waving.
            Racing Points disappoints again as in Belgium. Sergio Perez only
            could manage a P7, which was exactly the same time as McLaren’s
            Lando Norris in P8 both on soft tyres. Renault’s Daniel Ricciardo
            was behind them in P9 and the second McLaren of Carlos Sainz rounded
            out the top 10, with under a tenth of a second covering Sainz to
            Perez. Last year’s winner Charles Leclerc was eleventh with mediums
            for his fastest lap to go ahead of Renault’s Esteban Ocon who was in
            12th. Lance Stroll settled for 13th as he couldn’t get a clean run
            on soft tyres. Stroll did his fastest lap on hards which was 1.428s
            slower than the leader.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Both Haas drivers, Romain Grosjean and Kevin Magnussen managed to
            get soft-tyre flying runs in for P14 and P15. But Magnussen has to
            end his session early as Haas investigated a cooling issue on his
            car. Meanwhile the famous traffic at Monza hampered a number of
            drivers’ laps with the drivers constantly complaining about “blind”
            drivers in the front. Both Alfa Romeo has a clean run with Italian
            Antonio Giovinazzi finishing ahead of his team mate Kimi Räikkönen
            in P16 and P17 respectively. It was yet another punishing session
            for Sebastian Vettel in Ferrari's home race. The three-time Italian
            Grand Prix winner could only split the Williams in P19, losing his
            control at Turn 6, showing just how much the four-time champion is
            struggling. Roy Nissany, Williams' FP1 stand-in was the lead driver
            for the team as he finished P18 with Nicholas Latifi in the second
            Williams was last in the standings. George Russell will return back
            in place of Nissany for FP2, later for the evening.
          </p>
          {/* <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.we-havent-seen-the-full-potential-of-mercedes-or-red-bull-yet-says-wolff.4hSJsAzStntPh9H8WI6fDQ.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for More Details...
          </p> */}
        </div>
        {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-2 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.formula1.com/en/latest/article.ferrari-chairman-admits-scuderia-will-have-to-wait-until-2022-for-return-to.UOViZyylSU8Rqamj8JxBj.html'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-300'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/formula1_qd0yzg.jpg'
                  alt='f1.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53564603'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/ferrari-no-wins-2022-elkann/4845193/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12030674/hungarian-gp-practice-two-sebastian-vettel-fastest-in-wet-running'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/skysports_ruuxud.png'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150871/ferrari-chairman-elkann-doesnt-expect-wins-until-2022'
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
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/hamiltons-not-from-this-world-pole-lap-explained/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg bg-gray-800'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/therace_cq3ao6.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>*/}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/14/horner-i-hope-well-be-more-competitive-in-hungary/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/grandprix247_yj6fcw.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.planetf1.com/news/qualifying-report-styrian-gp-2020/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
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
export default Right
