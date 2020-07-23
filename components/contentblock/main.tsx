import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['Austria', 'Styria', 'Hungary'],
  datasets: [
    {
      label: ' Mercedes',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#00d2be',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#00d2be',
      pointBackgroundColor: '#00d2be',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#00d2be',
      pointHoverBorderColor: '#00d2be',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [37, 80, 121],
    },
    {
      label: '  Red Bull',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#0600ef',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#0600ef',
      pointBackgroundColor: '#0600ef',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0600ef',
      pointHoverBorderColor: '#0600ef',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 37, 55],
    },
    {
      label: ' McLaren',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#ff8700',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#ff8700',
      pointBackgroundColor: '#ff8700',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ff8700',
      pointHoverBorderColor: '#ff8700',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [26, 39, 41],
    },
    {
      label: ' Racing Point',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#f596c8',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f596c8',
      pointBackgroundColor: '#f596c8',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#f596c8',
      pointHoverBorderColor: '#f596c8',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [8, 22, 40],
    },
    {
      label: ' Ferrari',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#dc0000',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#dc0000',
      pointBackgroundColor: '#dc0000',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#dc0000',
      pointHoverBorderColor: '#dc0000',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [19, 19, 27],
    },
    {
      label: ' Renault',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#fff500',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#fff500',
      pointBackgroundColor: '#fff500',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#fff500',
      pointHoverBorderColor: '#fff500',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [4, 8, 12],
    },
    {
      label: ' AlphaTauri',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#0a2840',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#0a2840',
      pointBackgroundColor: '#0a2840',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0a2840',
      pointHoverBorderColor: '#0a2840',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [6, 7, 7],
    },
    {
      label: ' Alfa Romeo',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#960000',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#960000',
      pointBackgroundColor: '#960000',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#960000',
      pointHoverBorderColor: '#960000',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [2, 2, 2],
    },
    {
      label: ' Haas',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#787878',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#787878',
      pointBackgroundColor: '#787878',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#787878',
      pointHoverBorderColor: '#787878',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 0, 1],
    },
    {
      label: ' Williams',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: '#0082fa',
      borderCapStyle: 'round',
      borderDash: [1],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#0082fa',
      pointBackgroundColor: '#0082fa',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0082fa',
      pointHoverBorderColor: '#0082fa',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 0, 0],
    },
  ],
}

const Main: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      {/* <div className='h-48 md:h-64 xl:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595179123/contentImages/content/hamilton_zjzo65.jpg'
          alt='Bottas leads  thetime sheet with Hamilton and Perez second and third in the final practice session in Hungary'
        />
      </div> */}
      <div className='hidden md:flex flex-col mx-4 pt-4'>
        <div className='pb-4'>
          <Line data={data} />
        </div>
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <H1>How teams Performed after 3 races - A quick look back</H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 mercedes'>
            <strong className='italic text'>Mercedes:- </strong> Mercedes had a
            outstanding first three races with race wins in all three races,
            including a 1-2 finish at Styrian GP. Lewis Hamilton had 2 wins one
            fourth place{' '}
            <span className='italic'>
              (demoted from second to fourth place after a penalty)
            </span>{' '}
            finishes and Valtteri Bottas has 1 win and second and third finishes
            in last two races. Even though team had a good car, it was not free
            from problems. Car performance was affected with frets on the
            Mercedes pit wall about disturbing the sensors on the cars’
            gearboxes, which was sorted eventually. Currently Merecedes
            unbeatable with strong qualifying and racing performances. The team
            is miles ahead of the other competitors and future looks optimistic
            for the silver arrows.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 redbull'>
            <strong className='italic text'>Red Bull:- </strong> Red bull had
            disastrous start to the season with zero points in the Austrian GP.
            It was a nightmare race for Max Verstappen who experienced a loss of
            power after just 11 laps While his team mate Albon appeared to
            suffer a similar problem just two laps from the end. The Thai driver
            then looked pacey in the beginning but spun into the gravel after a
            contact with Hamilton costing a shot at a podium. But Red Bull
            fought back in with a P3 and P4 finish in Styrian GP and P2 and P5
            finish in Hungarian GP. Red Bull continues to struggle with the
            "Anomalies" causing 2020 F1 car to "misbehave" which causes drivers
            to get a grip of their car’s tricky characteristics. Red Bull is
            optimistic with great deal of work is going into understanding the
            issues and addressing that for the future races.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 mclaren'>
            <strong className='italic text'>McLaren:- </strong> McLaren had
            mixed results in the first three races with a strong race in
            Austrian GP and a decent race in Styrian GP but a disappointing race
            in Hungry. McLaren scored a podium with a P3 finish for Lando Norris
            in Austrian GP, handing the driver his first podium. Both drivers
            seem to have similar phenomenon like their cars with good and bad
            performances in the first three races. Even though the McLaren is
            doing much better than the engine supplier team, Renault, they need
            to peak up their performance to keep up with the top teams.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 racingpoint'>
            <strong className='italic text'>Racing Point:- </strong> Racing
            Point had its the best season since their emergence in F1. Racing
            point is currently poised at fourth in the constructor’s standings.
            But this glory is currently under scrutiny, after Reanult’s
            complaint against the team for infringements of rules and
            regulations while adopting the car design. Racing Point already
            admitted that they have “copied” last year’s championship winning
            car of Mercedes, but made sure that the design is with the
            confinement of rules. Keeping the allegations aside, Racing point
            has evolved to become one of the top teams from the ‘best of the
            rest’ which makes the season more interesting.
          </p>{' '}
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 ferrari'>
            <strong className='italic text'>Ferrari:- </strong> Despite a podium
            (P2 by Charles Leclarc) finish in Austrian GP, Ferrari had an awful
            season so far. The car is nowhere near the top cars in pace and
            performance. Ferrari is trying their maximum to stay in the hunt by
            fast-tracking the updates to the Hungarian GP, but not helping their
            course. Ferrari is currently in 5th position with nearly 100 points
            deficit to Mercedes, which is their worst performance in the current
            era. But speaking at Maranello following the team’s return from the
            Hungarian Grand Prix, team chief, Binotto is clear that now is the
            time for strengthening its organisation and helping people, rather
            than conducting a staff cull. The focus at the factory now is in
            understanding what has gone wrong with the current design, with
            Binotto suggesting that a full-scale overhaul may be required.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 renault'>
            <strong className='italic text three-d-text'>Renault:- </strong>{' '}
            Similar to Ferrari, another team to struggle after the first races
            is Reanult. Even though the team has a decent package of drivers and
            cars, the team is finding it difficult to get the sweet spot to
            perform. The prime driver Daniel Riccardo is doing his best to get
            the best possible results, his team mate Esteban Ocon is not
            obtaining the best performance from his RS2.0. The team has atleast
            one driver in top 10 in each race, but this not good enough for them
            to stay in the hunt with the top teams or the best of the rest. The
            team has to get strong performances in the next few races or else
            they will be pushed back to the back of the grid which will raise
            serious questions for the England based French team.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 alphatauri'>
            <strong className='italic text'>Alpha Tauri:- </strong> Alpha Tauri
            had a disappointing start to the season with both drivers out of top
            ten places after 3 races. Pierre Gasly is currently vanquishing in
            12th position while his team mate in 15th position. Alpha Tauri
            performed better in Qualifying but couldn’t replicate the same form
            in the races. To make things worse, both cars has atleast 1 DNF in
            the first 3 races.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 alfaromeo'>
            <strong className='italic text'>Alfa Romeo:- </strong> Alfa Romeo is
            yet another team who failed to make the mark in the first three
            races. The team only could achieve ‘one’ point finish, which was in
            Austrian GP featuring high attrition. The team struggles in both
            qualifying and race. Already struggling through the first two races
            with a largely uncompetitive car, Raikkonen has lamented his
            miserable performance in the Hungarian Grand Prix, and urged his
            team to do better.
          </p>{' '}
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 haas'>
            <strong className='italic text'>Haas:- </strong> Apart from the
            brilliant pre-race call(later penalized for the call) for changing
            tyres to slicks Haas had a ‘decent outing with two DNFs and
            one-point finish. The team is having glimpses of a bright future
            with some impressive driving from both drivers, moreover the drivers
            never collided with themselves and with other drivers. They are
            planning for some upgrades for the next few races, if worked the
            American team could get upgraded themselves to best of the rest
            battle.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 williams'>
            <strong className='italic text'>Williams:- </strong> Williams is the
            team under lime light for this year after Mecedes conforming their
            role in Williams team. After an impressive qualifying round at
            Hungarian GP, team failed to capitalize their form in race. The team
            has shown vast improvements in their performance for the current
            season. Hopefully the new upgrades with the better performance helps
            the team to get into points and bring back their glory days.
          </p>
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
export default Main
