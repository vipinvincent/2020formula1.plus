import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Left: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594992043/contentImages/content/mercedes12_ufegj1.jpg'
          alt=' Lewis Hamilton with a new lap record storms to pole position for British Grand Prix with Bottas in P2 and Max Verstappen in P3.'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Qualifying - British GP
          </div>
          <H1>
            Lewis Hamilton with a new lap record storms to pole position for
            British Grand Prix with Bottas in P2 and Max Verstappen in P3.
          </H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Mercedes dominates Qualifying in British GP with over 1sec faster
            than any other car on the track. Reigning world champion, Hamilton
            who have not led a single session in the weekend, miraculously
            recovers from a spin in Q3 to take record seventh Silverstone pole.
            Bottas who led Q1 and Q2, was nearly two tenths up on Hamilton in
            the first sector on his first attempt in the pole shootout, yet gave
            up his advantage over the rest of the lap, ending up a tenth and a
            half behind Hamilton’s 1m24.616s.Max Verstappen finished third for
            Red Bull, around one second adrift of Hamilton. They black(silver)
            arrows were 0.7s quicker than 2019, whereas Red Bull and Ferrari are
            both slower than they were in Q3 this time last year.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Ferrari’s Charles Leclerc, missed only by a fraction finished fourth
            fastest and will start alongside Max Verstappen on the second row,
            who did not improve on his final run in Q3. Lando Norris of McLaren
            wearing a cute helmet design created by a six-year-old female fan
            for the weekend, continues his strong qualifying pace was placed
            fifth beating Racing Point’s Lance Stroll. The Second McLaren of
            Carlos Sainz was 0.2secs slower than team mate finishes Seventh.
            Both Renaults made it into Q3, with Daniel Ricciardo edging out
            Esteban Ocon finishing Eighth and Ninth. Sebastian Vettel took the
            final top 10 spot nearly a second adrift of team-mate Leclerc after
            losing significant amounts of track time through the weekend owing
            to a series of reliability problems.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Earlier in Q2, AlphaTauri’s Pierre Gasly got knocked out even though
            he set exactly the same time as Stroll in P10 but, crucially, after
            the Canadian had done so. But the real shock of Q2 was Red Bull’s
            Alex Albon, who seemed to struggle since his crash in FP2 yesterday
            and could only manage 12th. Racing Point’s Nico Hulkenberg who will
            be racing for Sergio Pérez, who tested positive for covid 19 just
            before FP1 will start 13th, ahead of George Russell of Williams and
            Daniil Kvyat of AlphaTauri – who has a five-place grid penalty
            anyway. Meanwhile Russell is under investigation for failing to slow
            for yellow caution flags and will drop three places if he is found
            guilty.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Kevin Magnussen and Romain Grosjean of Haas, Antonio Giovinazzi and
            Kimi Raikkonen of Alfa Romeo and Nicholas Latifi of Williams fails
            to qualify for Q2. Kevin finished 16th with Antonio Giovinazzi and
            Kimi in 17th and 18th . Grosjean only could manage 19th whereas
            Nicholas Latifi spun on his final attempt and will start last.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The Mercedes cars, once again remains the favorites for the weekend
            race and expected to fly around the high-speed Silverstone and will
            finish miles ahead of other teams. The black/silver arrows sweep
            another P1 with the six-time champion saw him claim a record seventh
            home pole at Silverstone. Hamilton's pole was his fifth at
            Silverstone in six years and he is aiming to extend his record of
            home victories to seven on Sunday. In the post qualifying interview
            Hamilton said “In actual fact it really wasn’t a nice qualifying
            session for me,” He added “I made some changes going into
            qualifying, and it was worse… I had this inconsistency with the
            balance of the car and I was struggling. “Obviously it’s a
            relatively big gap between us and third place, but it doesn’t
            matter,” he added. “Valtteri’s been pushing me all weekend, he’s
            incredibly quick here. I think I had a tenth and a half advantage to
            him after the first lap and I knew that he would pick up some pace
            in that second run so the pressure was still on to go out and do
            better.
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
