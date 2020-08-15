import React from 'react'
import H1 from 'components/heading/H1'

const Main: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490683/contentImages/content/lewis-hamilton2_x4c01p.jpg'
          alt='Qualifying REPORT - Spanish GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Qualifying REPORT - Spanish GP 2020
          </div>
          <H1>
            Hamilton with 92nd pole tops the qualifying at 2020 Spanish GP with
            Bottas in P2 and Verstappen in P3
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes’ domination in the practice sessions reflects in qualifying
            with Lewis Hamilton heading team mate Valtteri Bottas by just
            +0.059s Red Bull’s Max Verstappen qualified third by 0.708s down on
            pole, ahead of the Racing Points of Sergio Perez and Lance Stroll.
            Verstappen just crossed ahead of Perez for third, as he too failed
            to improve on his final run, with Perez setting a personal best but
            still being unable to get ahead of the Red Bull. Lance Stroll was
            sixth ahead of Alex Albon in the other Red Bull in sixth, with
            Carlos Sainz Jr leading Lando Norris who only made into Q3 by
            0.002s, in seventh and eighth for McLaren. Ferrari’s Charles Leclerc
            and Pierre Gasly (AlphaTauri) rounded out the top 10.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Gasly's late improvement towards the end of Q2 knocked out Sebastian
            Vettel, and the second Ferrari will start 11th for the second race
            in a row. To make things worse It is for the third time this season
            he has not made it into the Q3 in qualifying. Daniil Kvyat, finishes
            12th 12th ahead of Daniel Ricciardo who will face a post-qualifying
            investigation for an incident with Kevin Magnussen at the second
            corner in Q1. Kimi Raikkonen scored his best qualifying result so
            far in 2020 with 14th, as Esteban Ocon finished as the slowest
            driver in Q2.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Kevin Magnussen managed to outqualify Romain Grosjean despite being
            behind in all three practice. George Russell did not make it into Q2
            for the first time since the season opener, but he maintained his
            100% qualifying record over Nicholas Latifi and Williams. Antonio
            Giovinazzi finished last in Q1, almost a second slower than his
            teammate with his best time, after earlier running heavily over the
            kerb at the exit of the final corner on his penultimate flying
            effort.
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
