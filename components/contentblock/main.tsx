import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Main: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595072621/contentImages/content/valtteri_-bottas_m5dgbs.jpg'
          alt='FP3 REPORT - Tuscan GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 REPORT - Tuscan GP 2020
          </div>
          <H1>
            Bottas with the with the fastest lap time leads final practice with
            Verstappen splitting Mercedes duo at Mugello
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes’ Valtteri Bottas leads FP3 and cleaned all the practice
            sessions at the Tuscan Grand Prix in the top position. Bottas set
            the fastest lap of 1:16.530 which is just +0.017s from Red Bull’s
            Max Verstappen and +0.083s from his team mate Lewis Hamilton in
            third. Racing Point's Lance Stroll finished an impressive P4 after
            last week podium performance. He was 0.582s off the leader and
            nearly one-tenth ahead of Italian Grand Prix winner Pierre Gasly in
            his AlphaTauri. Racing Point's second car finished sixth without the
            bargeboards updates as his team mate Stroll has got the new parts
            for this weekend. Charles Leclerc, within a second off Bottas pace
            finished P7 for Ferrari ahead of their landmark 1000th GP.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull’s Alex Albon finished P8, only to get improve his time
            after the chequered flag had flown which is over a second off from
            the top spot. AlphaTauri's Daniil Kvyat took P9 as Romain Grosjean
            rounded off the top 10 for Haas ahead of the Renault of Esteban Ocon
            in 11th . McLaren's Carlos Sainz took 12th and Alfa Romeo’s Antonio
            Giovinazzi finished P13. Kimi Räikkönen could not keep his peak
            performance from the first two practice sessions, only could manage
            P14.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Kevin Magnussen crossed the line at P15 in the second Hass ahead of
            the Williams of Nicholas Latifi who had a better session than his
            teammate. The Renault of Daniel Ricciardo finished inP17 as the
            Renault cars spent most of the session on mediums. Sebastian Vettel
            disappoints again in his Ferrari with P18, which is apparently the
            worst place by a Ferrari powered car in the session. Lando Norris
            only could manage P19 in his McLaren with Williams' George Russell
            finished last with a brake-by-wire issue keeping him in the garage
            after a one out lap.
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
        {/*  <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
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
              href='https://www.motorsport.com/f1/news/horner-one-stop-races-boring/4866469/'
              target='_blank'>
              <img
                className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                alt='motorsport.com'
              />
            </ActionLink>
          </div> */}
        {/*  <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/12433/12031161/hungarian-gp-practice-three-valtteri-bottas-fastest-from-lewis-hamilton'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/skysports_ruuxud.png'
                  alt='skysports.com'
                />
              </ActionLink>
            </div>*/}
        {/* <div className='mr-2'>
            <ActionLink
              href='https://www.autosport.com/f1/news/151806/horner-onestop-races-to-blame-for-dull-f1'
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
            </div>*/}
        {/* <div className='mr-2'>
            <ActionLink
              href='https://www.planetf1.com/news/christian-horner-boring-one-stops/'
              target='_blank'>
              <img
                className='w-auto  h-6 md:h-12 mt-0 p-3 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
                alt='planetf1.com'
              />
            </ActionLink>
          </div>
        </div> */}
      </div>
    </div>
  )
}
export default Main
