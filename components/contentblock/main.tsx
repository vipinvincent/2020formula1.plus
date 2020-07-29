import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Main: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1596029419/contentImages/content/champion_xry6rz.jpg'
          alt='Will 2020 Formula 1 season have a  Non-Mercedes race winner???'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <H1>Will 2020 F1 season have a 'Non-Mercedes' race winner???</H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 mercedes'>
            Just after the initial three races, the picture for 2020 season is
            revealing itself. Again, it will be another Mercedes domination;
            with only question left who (Hamilton or Bottas) going to be the
            campion. It is getting clearer that neither Ferrari nor Red bull can
            offer serious treats for Mercedes. Ironically even after 3 races,
            both teams are still dealing with the design and performance issues,
            only then Ferrari chairman admits that they don’t expect any F1 wins
            until 2022. But Red Bull is still confident to clean up the problems
            and will be competitive soon enough to challenge Mercedes for the
            championship.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 mercedes'>
            What would stop Mercedes’ Midas touch? Checking some (improbable)
            possibilities;
            <ul className='list-disc pl-6'>
              <li>More wet race weekends</li>
              <li>Red Bull fast tacking its updates</li>
              <li>Ferrari finding a miraculous solution</li>
              <li>Mclaren becoming more powerful</li>
              <li>
                Racing Point getting cleared of allegations and finding the
                sweat spot for the performance
              </li>
              <li>
                But the easiest but unlikely option will be Hamilton and Bottas
                making mistakes
              </li>
            </ul>
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 mercedes'>
            But the season is getting interesting for “best of the rest”, with
            Ferrari joining the middle pack. After strong performance in first 3
            races, Racing Point is making all headlines. Mclaren is also getting
            stronger when compared to their engine supplier team, Renault. But
            none of the drivers in the “best of the rest” pack is expected to be
            anywhere near the first three places in the 2020 season.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700 mercedes'>
            Also, it looks like the tail end won’t have a big change, but the
            casual performance of Alpha Tauri and the improved performance of
            Williams makes the life of Ferrari powered Haas and Alfa Romeo
            unstable. Hopefully the rest of season will bring some
            entertainment.
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
