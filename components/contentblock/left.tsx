import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Left: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490309/contentImages/content/lewis-hamilton_oavnow.jpg'
          alt='Qualifying REPORT - Italian GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Qualifying REPORT - Italian GP 2020
          </div>
          <H1>
            Mercedes dominates Monza without “Party” modes as Lewis Hamilton’s
            breaks the lap record for P1 from Bottas and Sainz
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton grabs pole position with a new track record at Monza
            in the Italian Grand Prix qualifying ahead of Valtteri Bottas
            claiming yet another 1-2 for Mercedes. It was a private affair for
            pole position at Monza between the two Mercedes cars as Lewis
            Hamilton, leading his team mate Valtteri Bottas only by 0.069s as
            Ferrari failed to get a car in the top 10 at their home race for the
            first time in 36 years. Carlos Sainz for McLaren was the best of the
            rest with an impressive third, which was McLaren’s third of the
            season, with Sergio Perez in the Racing Point at fourth. It’s also
            McLaren’s first top-three start at Monza since they locked out the
            front row in 2012. Perez will start fourth for the eighth time in
            his F1 career, with Max Verstappen pushed down to fifth. Since the
            turbo hybrid era began in 2014, this is for the first time Red Bull
            have failed to start on the front two rows of the grid at Monza.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The second McLaren of Lando Norris crossed the line in sixth with
            Daniel Ricciardo in seventh. Lance Stroll in the second Racing point
            finished eighth and Alexander Albon, who had three laps deleted for
            exceeding track limits finished in ninth. AlphaTauri’s Pierre Gasly
            rounded out the top 10 as his teammate Daniil Kvyat finished 11th.
            Meanwhile, Esteban Ocon had to settle for P12 as he got knocked out
            despite running behind teammate Ricciardo early in his final Q2 lap
            to try and take advantage of the tow. But, Ricciardo made a mistake
            and put his left-side wheels off into the gravel as he was exiting
            the second chicane and he later slowed and abandoned his lap, with
            Ocon not improving his final flyer in Q2.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Charles Leclerc of Ferrari ended up in P13, calling his Q2 lap "the
            best I can do", as Ferrari was again exposed by its straightline
            speed issues with the SF100. Kimi Raikkonen for Alfa Romeo and Kevin
            Magnussen for Haas made it through to Q2, but Magnussen ran very
            wide into the gravel as he flew through the second Lesmo, which
            ruined his final lap in the middle segment as they finished 14th and
            15th respectively. The second Haas of Romain Grosjean ended up in
            P16, ahead of Vettel, who abandoned his final Q1 run, as there were
            race-like scenes on the final runs in the opening segment, where
            backing-up at the Parabolica meant several drivers including Vettel
            fought for space at the right-hander and down the main straight.
            Behind Vettel came Antonio Giovinazzi and George Russell, who
            criticized his Williams team over his radio for getting involved in
            the chaotic scenes. Meanwhile the second Williams driver Nicholas
            Latifi, who was also involved, was the only driver to set a personal
            best, although he still ended up 20th and last.
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
export default Left
