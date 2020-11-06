import React from 'react'
import H1 from 'components/heading/H1'
// import Zoom from 'react-medium-image-zoom'

const RaceReport: React.FC = () => {
  return (
    <div className='relative'>
      <div className='h-48 md:h-64 xl:h-104  w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1603643847/contentImages/content/lewis-hamilton-portugal_kqpdjh.jpg'
          alt='Race REPORT - Portuguese GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - Portuguese GP 2020
          </div>
          <H1>
            Hamilton triumphant at Portimao and breaks the record of 92
            victories, becoming the most successful driver with most wins in
            Formula 1
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton of Mercedes secures his 92nd race win in Formula 1
            career and became the most successful driver in terms of victories
            in Formula 1 history, at Portimao in Portuguese GP. Although started
            from pole position, Hamilton got passed by both Bottas and McLaren’s
            Carlos Sainz after a dramatic opening lap, as the Mercedes team
            mates struggled to get their medium tyres working. By the next lap
            Sainz took lead from Bottas promising a interesting race ahead.
            Verstappen also had issues in the first lap, as he got tangled with
            Sergio Perez and sending the Mexican spinning, forcing Racing Point
            to take an early pit stop. Meanwhile Mercedes duo quickly re-passed
            Sainz who eventually ended his race in sixth, once the tyres are
            back to the working temperature. Later Verstappen crossed the line
            third and Ferrari’s Charles Leclerc impressed again with fourth
            place, cementing the comment from his team mate Vettal “Monegasque
            is currently in another league”. Pierre Gasly finished a fantastic
            fifth with lots of action packed overtakes throughout the race. A
            humongous effort from Perez’s put him to fifth but ended his race in
            seventh, as the Mexican got passed in the final stages by both Gasly
            and Sainz.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Even though, the Renault duo Esteban Ocon and Daniel Ricciardo
            struggled, they crossed line in a decent eighth and ninth
            respectively at chequered flag. Sebastian Vettel in the second
            Ferrai rounded of the points with a tenth place finish. Veteran Kimi
            Räikkönen once gain amazed with his performance and narrowly missed
            the point finish. The agony for Alexander Albon continues as he only
            could manage a P12 place which means his seat in Red Bull will be
            questioned again by the critics and by the Red Bull management.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lando Norris has a bad race after the collision by Racing Point’s
            Lance Stroll only managed a thirteenth place. However, the Canadian
            received a 5 second penalty for causing the collision and another 5
            second penalty for track limits infringements, before Racing Point
            retired his car. George Russell in Williams finished in fourteenth
            after showing the glimpses of his performance during the race. The
            second Alfa Romeo of Antonio Giovinazzi crossed the line in 15th
            place ahead of both Haas drivers Kevin Magnussen and Romain
            Grosjean. The second Williams of Nicholas Latifi finished in 19th
            ahead of Daniil Kvyat in AlphaTauri rounded of the classified driver
            list. The return of Portuguese Grand Prix will be remembered for the
            moment which Lewis Hamilton became Formula 1’s most successful
            driver of all time in terms of victories, a mighty record from the
            six-time World Champion in F1.
          </p>
          {/* <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Check out the positions of Top-5 drivers at the time Hamilton
            crossing the finish line.
          </p> */}
          {/* <div className='h-full w-full zoom-image'>
            <Zoom>
              <img
                className='w-full h-full object-cover rounded-t-md  '
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
