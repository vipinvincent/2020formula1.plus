import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <div className='h-48 md:h-64 xl:h-104  w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1606721136/contentImages/content/lh_si26yn.jpg'
          alt='Race REPORT - Bahrain  GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race REPORT - Bahrain GP 2020
          </div>
          <H1>
            Hamilton wins Bahrain GP as Grosjean survives a fiery accident
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Seven time champion Lewis Hamilton took his 11th victory of his
            title-winning Formula 1 2020 season, which was eclipsed by Romain
            Grosjean's horrific accident and Sergio’s late heartbreak. The Red
            Bull pair of Max Verstappen and Alex Albon grabs the rest of podium
            places. Racing Point’s Sergio Prerez was crusing smoothly to his
            first consecutive second podium of his career behind the leading
            pair, before the Mexican’s Racing Point expired spectacularly with a
            suspected power unit issue three laps from the end, which promoted
            Albon up to third. McLaren duo claimed fourth and fifth with Lando
            Norris leading home Carlos Sainz, while their 22 point finish saw
            them move ahead of the point-less Racing Point to P3 in the
            constructors’ standings.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Earlier on Lap 1, Grosjean’s Haas car plunged into the barriers at
            Turn 3 after clipping Daniil Kvyat's Alpha Tauri. The car speared
            between layers of the barrier, splitting the car into two with the
            Frenchman in one half with engulfing in fire. Miraculously, Grosjean
            could lean out of the inferno within several seconds of his cockpit
            as the medical crews and the marshals rushed to help. He managed to
            extricate himself and was helped over the barrier by FIA doctor Ian
            Stewart, who was in the medical car that rushed to the scene. Shaken
            by the accident, Grosjean initially seated in the medical car before
            being helped into an ambulance and then flown swiftly transported to
            the Bahrain Defence Force Hospital, where he stayed overnight for
            treatment. Luckily, he had not suffered any fractures, but has few
            burns on the back of both of his hands and some minor injuries.
            Later Grosjean said, “I’m okay, well, sort of okay,” holding up
            bandages covering his burnt hands. "I wasn’t for the halo some years
            ago but I think it’s the greatest thing we brought to Formula 1 and
            without it I wouldn’t be able to speak to you today. “Thanks to all
            the medical staff at the circuit, at the hospital, and hopefully I
            can soon write you quite some messages and tell you how it’s going.”
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            After a lengthy red flag period ensuing as the barriers were
            repaired after what had been a horrible incident, at the restart
            Racing Point’s Lance Stroll was rolled over after contact with
            AlphaTauri’s Daniil Kvyat ending his race. AlphaTauri’s Pierre Gasly
            with a different but risky statergy, crossed line in a well-deserved
            P6, ahead of the Renault of Daniel Ricciardo and Mercedes’ Valtteri
            Bottas who suffered a puncture at the race restart on Lap 3. The top
            10 was rounded out by the second Renault of Esteban Ocon and the
            Ferrari of Charles Leclerc in P10. Behind the Ferrari Daniil Kvyat
            finished Eleventh with George Russell in Williams twelfth and
            Sebastian Vettel in the second Ferrai in thirteenth. Nicholas Latifi
            in the second Williams followed by the two Alfa Romeos of Kimi
            Räikkönen and Antonio Giovinazzi with Kevin Magnussen of Haas
            rounded of the classified list.
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
export default First
