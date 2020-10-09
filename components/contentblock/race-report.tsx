import React from 'react'
import H1 from 'components/heading/H1'
// import Zoom from 'react-medium-image-zoom'

const RaceReport: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1601214934/contentImages/content/bottas_bw5vun.jpg'
          alt='Race REPORT - Russian GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - Russian GP 2020
          </div>
          <H1>
            Mercedes’ Valtteri Bottas wins in Sochi with Verstappen in Second
            and Hamilton in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes’ Valtteri Bottas claimed his second victory of 2020 at the
            Russian Grand Prix, as a ten second penalty for the pole setter
            Lewis Hamilton forced him to third. Meanwhile, Max Verstappen scored
            Red Bull’s first ever podium at Sochi in P2. Hamilton started the
            race with the investigation on for a pair of practice start
            infringements on his laps to the grid. Later 5 seconds penalty for
            each incident was handed to Hamilton during mid-race, ruling him out
            of contention for the win. Incidentally, Hamilton will get a licence
            penalty point for each of the two time penalties received in this
            race. This will take his penalty tally to 10,two short of a race
            ban. Earlier, Bottas had passed Verstappen for second at the race
            start, and Verstappen himself plunged to fourth later recovered to
            third from where both enjoyed a trouble free race to the chequered
            flag. This would have been an confidence booster for Bottas, who
            needs to be fighting for the championship with Hamilton and
            Verstappen too after two DNFs.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point’s Sergio Perez came home with fourth behind the podium
            positions. Renault’s Daniel Ricciardo, after a 5 second penalty had
            enough pace in hand to maintain P5 at the flag, ahead of the Ferrari
            of Charles Leclerc in sixth. Esteban Ocon in the second Renault, who
            let his team mate pass in race after failing to overtake Leclerc,
            crossed the line in P7. Home hero Daniil Kvyat impressed in his
            AlphaTauri with P8 finish ahead of his teammate of Pierre Gasly.
            Pierre Gasly himself had a personal moment in the race with the Red
            Bull of Alex Albon, who came home P10, having started P15 after
            receiving a five-place penalty for changing his gearbox.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Antonio Giovinazzi in Alfa Romeo crossed eleventh ahead of Kevin
            Magnussen in Haas. Sebastian Vettel in the second Ferrari
            disappoints again with a P13 finish who had few interesting battles
            with two Renault cars in between the race. Behind Vettel, Alfa
            Romeo’s Kimi Raikkonen finished P14 as he matched Rubens
            Barrichello’s tally of 322 F1 starts. This means the Finn is set to
            make a record his own at the upcoming Eifel Grand Prix at Germany.
            Lando Norris in McLaren on could manage P15 as Willams’ Nicholas
            Latifi finished in P16. Romain Grosjean in the second Haas and
            George Russell in the second Willams rounded off the race finishers.
            Meanwhile, McLaren’s Carlos Sainz who ripped the front right corner
            off his car while trying to re-join the track at Turn 3, and Racing
            Point’s Lance Stroll who was tagged by Charles Leclerc at Turn 4,
            are the two DNFs of the race. These two events invoked the safety
            car in the first lap which were the only incidents, otherwise a
            trouble free race event, after the double red flagged races in
            Italy.
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
