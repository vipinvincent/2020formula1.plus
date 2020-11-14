import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Right: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1605276462/contentImages/content/max_wubeqo.jpg'
          alt='FP3 REPORT - Turkish GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 REPORT - Turkish GP 2020
          </div>
          <H1>
            FP3 session interrupted by heavy rain as Verstappen goes quickest
            with Leclerc in second and Albon in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull’s Max Verstappen heads the timesheets in the rain
            intervened FP3 session as many drivers failed to perform the quali
            like simulations. Some of the drivers only managed few out laps with
            only 3 drivers could make more than 10 laps in the final practice
            session. Ferrari’s Charles Leclarc managed secons as Max’s teammate
            Alex Albon finished in third with his 5 hands laps in the session.
            Renault’s Esteban Ocon who tipped Leclerc causing him to spin in
            early session, finished fourth fastest with McLaren’s Lando Norris
            finished fifth. The second Ferrari of Sebastian Vettel managed P6 as
            he managed the most mileage in his SF1000 in the FP3 session with 14
            laps. Sergio Perez became the best of the Racing Points with seventh
            place finish.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The best of Mercedes was Valtteri Bottas who managed 4 laps 1 better
            than his teammate Lewis Hamilton who failed to post a meaningful
            time in the session classified last in the leaders chart. Bottas is
            followed by Kevin Magnussen in Hass and Lance Stroll in the second
            Racing Point with P9 and P10 positions. Daniel Ricciardo of Renault
            managed eleventh who is the last driver in 10 second margin from the
            leader. The second McLaren of Carlos Sainz finished P12 as Antonio
            Giovinazzi of Alfa Romeo finished P13.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Pierre Gasly was the highest-placed AlphaTauri, just behind
            Giovinazzi while his team mate Daniil Kvyat was 17th, who spun
            numerous times. And was the last driver to cross the linen with
            wets. Romain Grosjean who remarked to run rental cars on track for
            laying some rubber on the surface on Friday night, that’s exactly
            what happened, albeit in vain thanks to the deluge that followed
            this morning finished P15. Kimi Räikkönen in Alfa Romeo managed the
            second best mileage of 13 laps corssed the line on P16 with the
            Williams Duo George Russell and Nicholas Latifi only managed one
            installation lap also couldn’t post a meaningful time.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            {' '}
            As there are predictions for rain in qualifying sessions in the
            evening which will big implications for the re-laid circuit, since
            drivers were finding it even difficult to get the best grip out of
            the slicks. It looks like the drivers will be doubtful for
            unleashing the full wrath of the modern hybrid f1 cars on Saturday
            afternoon. Still the Turkish GP will be in history as the current
            world champion could claim his seventh drivers’ title on Sunday
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
