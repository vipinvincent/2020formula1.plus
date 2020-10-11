import React from 'react'
import H1 from 'components/heading/H1'
// import Zoom from 'react-medium-image-zoom'

const RaceReport: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1602434740/contentImages/content/hamilton-mickschumacher_o1c0ml.jpg'
          alt='Race REPORT - EIFEL GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - EIFEL GP 2020
          </div>
          <H1>
            Hamilton wins Eifel GP and takes record equalling 91st victory as
            Ricciardo claims his first podium with Renault
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes’s Lewis Hamilton has paralleled win record of Michael
            Schumacher with his 91st F1 victory at Eifel GP 2020 as his pole
            sitting team mate Valtteri Bottas had to retire his W11 due to a
            loss of power, which is incidentally Mercedes’s first DNF of 2020.
            As part of the immediate post-race interviews, Hamilton was
            presented with one of Michael Schumacher’s race helmets by Mick
            Schumacher, who congratulated him on the historic achievement. “I’m
            so honoured. I really appreciate that,” Hamilton told Mick
            Schumacher after being handed the red Mercedes helmet. Red Bull’s
            Max Verstappen crossed the line in P2 with the fastest lap point on
            his lat last towards the chequered flag. Meanwhile Daniel Ricciardo
            secured his first podium for the Renault team, since his win for Red
            Bull at Monaco in 2018. This also the first podium for Renault since
            returning to the sport in 2016.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point’s Sergio Perez came home in P4 after a tough battle
            with Daniel for the final podium place. Carlos Sainz of sole
            remaining McLaren finished P5 had a stealthily brilliant race from
            AlphaTauri’s Pierre Gasly saw him take P6 after a late pass on
            Ferrari’s Charles Leclerc. The second Racing Point of super sub Nico
            Hulkenberg, who did a fine cameo job in place of Lance Stroll to
            jump from P20 to P8. With such short notice, that he couldn't even
            take part in practice on Saturday, joined the team few minutes
            before the qualifying did an awesome race which earned the driver of
            the day. Romain Grosjean of Haas secured his first points of the
            season finished in P9, while Alfa Romeo’s Antonio Giovinazzi claimed
            the final points paying position, just holding off the Ferrari of
            Sebastian Vettel.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Sebastian Vettel in the second Ferrari disappoints again with a
            pointless finish in P11 ahead of Kimi Räikkönen of Alfa Romeo who
            broke the record with 323rd start. Kevin Magnussen in second Hass
            crossed the line in P13 with Nicholas Latifi in Williams in p14 and
            Daniil Kvyat inn second Alpha Taruri rounded of the drivers who
            completed the race. Earlier George Russell had to retire his car
            after colliding with Kimi followed by Valtteri Bottas who retired
            due to a power loss. Later Bottas was joined by the Renault of
            Esteban Ocon, the Red Bull of Alex Albon, and the McLaren of Lando
            Norris due to meachanical issues. Now all eyes turns to Renault team
            boss Cyril Abiteboul who is getting a tattoo as Riccardo announces
            that “It's real; It's going to happen” during the postrace
            interviews.
          </p>
          {/* <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Check out the positions of Top-5 drivers at the time Hamilton
            crossing the finish line.
          </p> */}
          {/* <div className='h-full w-full zoom-image'>
            <Zoom>
              <img
                className='w-full h-full object-cover rounded-tl-xxl'
                src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1598860581/contentImages/content/spa_fj1j8u.png'
                alt='Check out the positions of top5 drivers when Hamilton crossing the finish line!!!!'
              />
            </Zoom>
          </div> */}
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
export default RaceReport
