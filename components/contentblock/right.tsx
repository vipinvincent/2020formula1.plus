import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Right: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1596212334/contentImages/content/silverstone_u3q2ho.jpg'
          alt='Stroll leads Albon and Bottas in FP2; Verstappen quickest from Hamilton and Stroll in FP1 as Hulkenberg shines on his  RETURN'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-6 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP1, FP2 and FP3 Report - British GP 2020
          </div>
          <H1>
            Bottas leads Hamilton and Verstappenin FP3; Stroll leads Albon and
            Bottas in FP2; Verstappen quickest from Hamilton and Stroll in FP1
            as Hulkenberg shines in FP1 nad FP2 on his 'RETURN'
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Valtteri Bottas set the fastest time in final free practice session
            with Lewis Hamilton just behind him as Mercedes grabbed 1-2 for the
            first time this weekend. Bottas set his fastest time of 1m25.873s
            ahead of Hamilton (0.138s) and Red Bull’s Max Verstappen (0.300s).
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lance Stroll of Racing Point, who was top in FP2 finished 0.703s off
            Bottas in P4, while Sergio Perez's stand-in Nico Hulkenberg was
            0.999s off the lead in P9. Carlos Sainz the McLaren driver finished
            P5 and his team mate Lando Norris in P7. Ferrari’s Charles Leclerc
            split the McLarens finsished P6 which was 0.898s off P1. Daniel
            Ricciardo of renualt finishes P8 and Pierre Gasly rounds top 10.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point’s Lance Stroll leads FP2 ahead of the Red Bull of Alex
            Albon and the Mercedes of Valtteri Bottas. The session got disrupted
            due to a crash for Albon as he was rounding the fast Stowe corner
            when he lost the back end of his car only to snap his car the other
            way and careened into the barriers, bringing out a red flag. Despite
            Albon clambering out of the car himself, he was taken to the Medical
            Centre after his g-force sensor was triggered, but the team later
            confirmed he had been cleared by the medics.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari’s Charles Leclerc finished an impressive P4, and Mercedes’
            Lewis Hamilton, the six-time Silverstone winner completes the top 5
            spots. McLaren’s Carlos Sainz was sixth, ahead of the impressive
            Nico Hulkenberg, who finished the session seventh, 0.636s off FP2
            leader Stroll. Pierre Gasly finished P8, ahead of Daniel Ricciardo
            and Kimi Raikkonen completes top 10.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Max Verstappen bags the P1 in the first practice session of the 2020
            British Grand Prix for Red Bull, as Nico Hulkenberg returns to F1
            for replacing Sergio Perez at Racing Point. Earlier Sergio Perez
            tested positive for Covid-19 ahead of this race, only for the
            German, the ex-Renault and Force India was called up at the last
            minute to for a unlikely seat in Racing Point.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Verstappen shown blistering pace for Red Bull, setting a time 0.474s
            quicker than Lewis Hamilton and +0.582s quicker than third-place
            Lance Stroll in racing Point. Verstappen's time of 1m27.422s was a
            full seven-tenths faster than his team mate's, as Alex Albon who
            finished fourth. Hamilton had a new MGU-K fitted to his W11 this
            weekend in a precautionary move by Mercedes, but he will not take a
            grid penalty as he is still within his allowance for the season.
            Verstappen and stroll set their best time with softs, but Hamilton
            set his best time on mediums.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari’s Sebastian Vettel couldn’t participate in FP1 as his SF1000
            car was having an intercooler issue and completed no timed laps,
            while team mate Charles Leclerc rounded out the top-five with a
            0.799s deficit to Verstappen. Valtteri Bottas with over a second off
            Verstappen’s place mainly focused on long runs on the hard compound
            tyres for Mercedes. The Renault teammates finished behind Bottas
            with Esteban Ocon seventh, just under 0.020s faster than
            eighth-place Daniel Ricciardo. Hulkenberg, running in an FP1 session
            for the first time since last year, was just 0.6s behind his team
            mate Stroll. Daniil Kvyat completes top 10 list with +1.446s behind
            leader.
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
        {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-1 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.formula1.com/en/latest/article.buxton-why-my-admiration-for-the-teams-has-never-been-higher-after-f1s.pAWHgNXi6qMlS2qQZmCVt.html'
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
                href='https://www.bbc.com/sport/formula1/53377338'
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
            href='https://www.motorsport.com/f1/news/mclaren-triple-header-races-standard/4844013/'
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
                href='https://www.skysports.com/f1/news/12433/12026519/lewis-hamilton-proud-to-master-terrifying-styrian-gp-qualifying'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150565/red-bull-expects-to-close-gap-on-mercedes-in-hungary'
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
                href='https://www.grandprix247.com/2020/07/27/seidl-triple-headers-cant-be-the-new-standard/'
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
