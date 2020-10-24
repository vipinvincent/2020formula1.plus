import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Main: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1599834663/contentImages/content/valteri-bottas_kvx19p.jpg'
          alt='FP3 REPORT - Portuguese GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 REPORT - Portuguese GP 2020
          </div>
          <H1>
            Bottas clean swept all the practice sessions at Portuguese GP ahead
            of Hamilton and Verstappen
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Bottas leads the final practice at Portimao and made it a hat-trick
            of fastest laps in Portuguese GP practice weekend. His Mercedes team
            mate Lewis Hamilton finished second just ahead of Red Bull's Max
            Verstappen in third place. Although track limits have been revised
            after Friday's running, numerous lap times got deleted at Turns 1 at
            4 including max and his teammate Albon, which might have changed the
            top 3 list. AlphaTauri's Pierre Gasly impressed with P4 performance
            from his fire engulfed car in FP2 which is just a tenth off former
            team mate Verstappen as he was sandwiched between the Red Bulls on
            the leader board. Alex Albon also had a good session for Red Bull
            with fifth place, which was only 0.3s off his team mate. Meanwhile
            the session ended one minute early after a drain cover got uplifted
            by Vettel who ran over the drain cover at Turn 14, which brought out
            the red flags. This raised the eyebrows of the stewards regarding
            the safety of the track and will be inspected after the practice
            session.he stewards regarding the safety of the track and will be
            inspected after the practice session.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari continues to impress the Portugal GP as Charles Leclerc
            finished sixth reflecting the positive signs from the upgraded
            Ferrari SF1000. But team mate Sebastian Vettel only could manage
            11th but shows signs of improvement. McLaren's Carlos Sainz finishe
            din P7, who took a new engine, turbo and MGU-H. Sergio Perez took P8
            for Racing Point, as the second McLaren of Lando Norris crossed the
            line in ninth. Esteban Ocon rounded the top ten list for Renault.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Daniil Kvyat in second AlphaTauri finised 12th, with Alfa Romeo's
            Kimi Raikkonen in P13. Renault's Daniel Ricciardo's only could
            manage P14 as his R.S.20 suffered a DRS failure towards the meid of
            seesion. But later Ricciardo emerged from pit lane for one final go
            in FP3 but that red flag towards the end of session aborted his lap.
            George Russell impressed with P15 for Williams as Racing Point’s
            Lance Stroll only manged P16. Earlier both Lance and Max got cleared
            of any penalty for the incident in FP2. Antonio Giovinazzi finished
            16th in the second Alfa Romeo with Haas drivers Haas Kevin Magnussen
            and Romain Grosjean sandwiched Nicholas Latifi of Williams rounded
            of the list.
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
