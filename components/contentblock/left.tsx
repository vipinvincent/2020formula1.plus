import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Left: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490683/contentImages/content/lewis-hamilton3_za9deq.jpg'
          alt='Qualifying REPORT - Belgian GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP2 REPORT - ITALIAN GP 2020
          </div>
          <H1>
            Hamilton leads the Second Practice session from Bottas and Norris
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton tops FP2 with Mercedes’ second one-two of the day as
            Valtteri Bottas crossed the line +0.262s behind Hamilton . Hamilton
            finished FP2 with a best time of 1m 20.192s which is 0.786s faster
            than Charles Leclerc’s leading time from the session last year.
            Lando Norris, of McLaren put himself in an impressive P3 which is
            nine-tenths in the qualifying like simulations. Earlier, Lando
            Norris’ session was hampered by a power unit, but a late effort on
            the soft compound was good enough for P3. AlphaTauri's Pierre Gasly
            impressed as the best Honda runner, ending up P4 and just over a
            tenth quicker than Red Bull’s Max Verstappen.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Carlos Sainz finished in sixth in the second McLaren. Daniil Kvyat
            of AlphaTauri’s crossed the line in seventh, ahead of the Racing
            Point of Lance Stroll who was in P8. Meanwhile Ferrari had a better
            afternoon with a top 10 finish as Leclerc took P9 which is 1.311s
            off Hamilton’s time. Although both drivers struggled with Vettel
            spinning and Leclerc had a short journey through gravel and
            described the car as “so hard to drive”. The top 10 was rounded out
            by Sergio Perez in the second Racing Point. Renault’s Esteban Ocon
            crossed the line in P11 with the second Ferrari of Sebastian Vettel
            finished in P12, who had a late spin at the exit of Lesmo 1,
            seemingly caught out by his SF1000’s low-downforce set-up.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Antonio Giovinazzi was Alfa Romeo’s fastest driver in 13th, as Alex
            Albon and Daniel Ricciardo ended up in 14th and 15th respectively,
            only after the best laps deleted for track limit infringements at
            the Parabolica. The deleted lap times of both drivers was worthy of
            top 5 finish which looks promising for a better qualifying time on
            Saturday. Kevin Magnussen took 16th for Haas, ahead of 2018
            polesitter Kimi Raikkonen and the second Haas of Romain Grosjean in
            18th. Nicholas Latifi finished as the fastest Williams in 19th,
            while George Russell was 20th on his first session of the weekend as
            Roy Nissany took his car in FP. But both drivers complained that his
            car was “feeling horrific” on his high fuel runs raising eye brows
            of many including the Clare Williams who will have a farewell
            weekend at Williams team at Monza.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            So, with or without party mode, Mercedes still has a significant
            advantage at the “Temple of Speed”. Even though, Lewis Hamilton
            fears there will be a repeat of traffic "nightmare" from 2019 in
            qualifying at Monza tomorrow, hopefully there’ll be no repeats of
            the tow dramas on Saturday Qualifying this time. Meanwhile, FIA race
            director Michael Masi issued a warning about drivers running too
            slowly, and indicated that there would be a minimum out lap time in
            FP3 and qualifying.
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
