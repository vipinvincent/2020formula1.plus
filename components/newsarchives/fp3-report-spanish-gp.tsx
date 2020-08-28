import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Archive24: React.FC = () => {
  return (
    <div className='relative'>
      {/* <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597490683/contentImages/content/lewis-hamilton3_za9deq.jpg'
          alt='FP3 REPORT - Spanish GP 2020'
        />
      </div> */}
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 REPORT - Spanish GP 2020
          </div>
          <H1>
            Mercedes completes a clean sweep in practice sessions with Hamilton
            leads from Bottas and Verstappen in FP3
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes domination fulfilled in the free practice sessions as they
            registered their “Hat Trick” one-two finish at the Circuit de
            Barcelona-Catalunya, with Lewis Hamilton heading team mate Valtteri
            Bottas by +0.151s in Free Practice 3, and Red Bull’s Max Verstappen
            third. Verstappen improved his performance with jut +0.515s adrift
            of Hamilton for Red Bull. McLaren’s Carlos Sainz could gather back
            his rhythm as he finished P4 with Sergio Perez of Racing point in an
            impressive P5 on his comeback after the Covid 19 recovery.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari’s Charles Leclerc who was a tenth slower than Racing Point
            finised P6 with his Team mate Sebastian Vettel , running a new
            chassis this weekend could not improve his form, but finished P12
            which was half a second off Leclerc, having expressed some optimism
            after a solid Friday. AlphaTauri’s Pierre Gasly was the final driver
            who was under a second away from Hamilton’s time finishes in P7,
            with the second Racing Point of Lance Stroll narrowly behind for P8.
            Alexander Albon in the second Red Bull only managed P9 with 0.634s
            slower than his team mate Max. Daniel Ricciardo of Renault couldn’t
            keep up his performance of FP2 rounds the top 10 list.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ocon ended up 11th quickest before his crash, over 0.2s behind team
            mate Daniel Ricciardo. Ocon found himself darted into a slow-moving
            Kevin Magnussen on the run-up to Turn 4.
            {/* Ocon spun in avoidance and
            hit the wall on the right-hand-side, ripping off his front wing and
            bringing out a red flag to end the session with a couple of minutes
            left on the clock. */}
            {/* The Renault mechanics will have less than two
            hours before qualifying begins so that they could fix the issues and
            make it ready for the grid. */}
            Romain Grosjean took a new engine after a failure at the end of FP2
            but couldn’t replicate his impressive form and ended up 13th, just
            ahead of Kimi Raikkonen who improved very late in the session for
            P14 in his Alfa Romeo. Lando Norris could only manage 15th, ahead of
            AlphaTauri's Daniil Kvyat and Kevin of Haas.
            {/* Antonio Giovinazzi took P18 ahead of the two Williams, with
            George Russell ahead of Nicholas Latifi who rooted in last spot. */}
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
export default Archive24
