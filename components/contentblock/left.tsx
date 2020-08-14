import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Left: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1596990283/contentImages/content/max_afwfdz.jpg'
          alt=' Max Verstappen defeats Mercedes at Silverstone and wins Formula 1s 70th Anniversary Grand Prix. '
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-1 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - 70TH ANNIVERSARY GP
          </div>
          <H1>
            Max Verstappen defeats Mercedes at Silverstone and wins Formula 1's
            70th Anniversary Grand Prix.{' '}
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Max Verstappen has become the first non-Mercedes driver to win a
            race in 2020 F1 season aided with incredible driving and a brilliant
            strategy by the team. The interesting choice of tyres made by the F1
            for the 70th Anniversary Grand Prix produced an action-packed racing
            throughout the grid, encouraging teams to try out wide variety of
            strategies. Verstappen being the only driver in the top 10 to begin
            the race on the hard tyres. quickly passed the Racing Point of Nico
            Hulkenberg in P3 and he managed his pace brilliantly throughout the
            race, pressuring the Mercedes and forcing them to take alternative
            strategies secures his first victory since Brazil last year and Red
            Bull’s first win at Silverstone since 2012.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton of Mercedes accomplished a late-race surge on his
            team mate Valtteri Bottas with two laps to go into Brooklands to
            claim second place there by equaling the number of podiums finishes
            by Michael Schumacher. Meanwhile Bottas, probably the biggest looser
            of race, second time in three years that has failed to convert a
            Silverstone pole into a win, as he has to settle with third only
            after a questionable strategy performed by Mercedes team backing
            Hamilton to perform better in the last stint of the race.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari’s Charles Leclerc with a one-stop work to claimed P4, while
            his team mate Sebastian Vettel could only manage P12, due to an
            early spin at the first corner of the race. Alex Albon took an
            impressive fifth in the second Red Bull, passing the Racing Point of
            Lance Stroll with a lap to go. Both Racing point drivers could not
            keep up the qualifying performances in the race as Stroll finished
            P6 ahead of stand-in team mate Nico Hulkenberg, who stopped very
            late on for soft tyres, later clarified that the Nico has reported a
            significant vibration towards the end of the race. Renault’s Esteban
            Ocon finished P8, ahead of the McLaren of Lando Norris in P9 and the
            AlphaTauri of Daniil Kvyat in P10, despite of his lower starting
            position, finished ahead of his team mate Pierre Gasly.
          </p>
          <p className='mt-1'>
            The second Mclaren driver Carlos Sainz finished 13th and the Renault
            of Daniel Ricciardo who had spun battling Sainz in the middle phase
            of the race could only manage a disappointing P14, who started 5th.
            {/* Kimi Räikkönen of Alfa Romeo finished P15 from the last place of the
            start grid as his team mate Antonio Giovinazzi finished 17 just
            behind the Hass of Romain Grosjean who finished 16th. Both Williams
            drivers disappoints as they got rooted in the back of the grid with
            George Russell in 18th and Nicholas Latifi in 19th. Kevin Magnussen,
            the only non-finisher had to retire the car towards the end of the
            race. */}
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
