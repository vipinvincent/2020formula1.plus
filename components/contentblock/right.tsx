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
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race Report - British GP
          </div>
          <H1>
            L"ucky” Hamilton wins seventh British Grand Prix with a punctured
            tyre; Verstappen finishes second and Leclerc in third after a last
            lap tyre drama
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton completes a hat trick win in 2020 season and
            accomplishes his seventh victory in the British Grand Prix in spite
            of his left-front tyre letting go in the last lap. Before taking the
            chequered flag, Mercedes were dominant and lead the race with 1-2
            till 51st lap out of 52 laps. On lap 50, then second-placed Valtteri
            Bottas suffered a uncommon tyre puncture costing him second place
            and finished 11th. Hamilton suffered the same issue half a lap still
            to go, but was able to complete the race with the punctured tyre
            without losing any places. However, "lucky and unlucky" Verstappen
            who pitted a few laps from the end for claiming fastest lap, crossed
            the line five seconds (which was around 35 seconds on final lap)
            behind of limping Hamilton. Charles Leclerc finished an unlikely
            third, after a lonely race in his Ferrari with nearly 13 seconds
            behind Max.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Renault’s Daniel Ricciardo claimed fourth as McLaren’s Carlos Sainz,
            who was set to finish fourth, had a similar tyre issue which dropped
            him P13. The other McLaren of Lando Norris crossed the line in fifth
            as he was able to keep up his reputation of overtaking at least 1car
            in the last lap. Renault’s Esteban Ocon finished sixth who had a
            race-long personal battle with the Racing Point of Lance Stroll,
            with Pierre Gasly finished seventh for AlphaTauri. Stroll was only
            able to finish 9th with Alex Ablon overtaking him in the last lap.
            Meanwhile Albon finished eighth for Red Bull, after recovering from
            a Lap 1 tussle with the Haas of Kevin Magnussen and a 5 second
            penalty (for causing the accident with Kevin). Sebastian Vettel
            finished 10th after holding off a late charge from the recovering
            Mercedes of Bottas, who finished 11th.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            George Russell of Williams finished an impressive 12th with Carlos
            Sainz on his tail. Alfa Romeo’s Antonio Giovinazzi finishes 14th
            with his team mate, Kimi Räikkönen with a struggling and damaged car
            in plum last. The lone ranger, Nicholas Latifi finished 15th and the
            man with alternate statergy Romain Grosjean of Haas finished a
            fighting 16th. AlphaTauri's Daniel Kvyat suffered that misfortune
            just 13 laps into Sunday’s British Grand Prix, as his car snapped
            sideways through the left-handed swoop and speared into the
            barriers. Kevin Magnussen after his tussle with Alex also could not
            complete his race. Meanwhile, Nico Hulkenberg could not even start
            his race as the Racing Point team discovered a technical issue on
            the RP20 that he'd taken over from Sergio Perez on Friday.
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
