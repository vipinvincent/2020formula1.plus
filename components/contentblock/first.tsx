import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const First: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-md'>
      <div className='h-48 md:h-64 xl:h-104  w-full'>
        <img
          className='w-full h-full object-cover rounded-t-md  '
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1607319180/contentImages/content/sergio-perez_vj1ilf.jpg'
          alt='Race Report - Sakhir  GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Race Report - Sakhir GP 2020
          </div>
          <H1>
            Sergio Perez claims his maiden win in Sakhir GP after dropping to
            last place in lap 1 with Ocon in second and Stroll in third
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Sergio Perez takes a sensational first ever Formula 1 victory in
            Sakhir GP after Mercedes’ nightmare pitstop saga. Perez on his 190th
            F1 start, had been forced to pit at the end of Lap 1 after getting
            caught up in a Turn 4 crash that eliminated Ferrari’s Charles
            Leclerc and Red Bull’s Max Verstappen, dropping him to last place.
            The Mexican keeps on improving by overtaking multiple cars in the
            Sakhir Outer circuit and eventually allowed him to benefit from
            Mercedes’ pit error which messed up the strategy and podium finishes
            for both their drivers, to sensationally claim his and Racing
            Point’s first ever victory, a week after an MGU-K failure had robbed
            him of a podium. After a difficult return to F1, Renault’s Ocon
            claimed his first ever podium finish in second, with Stroll holding
            off a charging Carlos Sainz to take his second third of the year.
            McLaren driver Carlos Sainz finished in fourth and Renault's Daniel
            Ricciardo in P5.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Alex Albon, the sole surviving Red Bull finished in sixth, ahead of
            the AlphaTauri of Daniil Kvyat in P7. The Mercedes pair of Bottas
            and Russell eventually ended up in P8 and P9 positions after leading
            the race for 3 quarter of the entire race. It had initially looked
            as though George Russell was set to pull off an incredible maiden
            victory on his first outing for Mercedes, having aced the start to
            lead pole-sitter Valtteri Bottas for the majority of the Grand Prix.
            But Mercedes gave Russell the wrong tyres when he was pitted under a
            Safety Car on Lap 62 of 87, forcing another pit stop to correct the
            error. After a while Russell then suffered a puncture that left him
            P9 at the flag for what was at least his first ever F1 points
            finish. Lando Norris in the second Mclaren ensured a point finish
            for the team after been forced to start from back of grid for use of
            additional power unit elements.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Pierre Gasly in the second AlphaTauri finished 11th ahead of the
            sole surviving Ferrari of Sebastian Vettel. Both Alfa Romeos follows
            next with Antonio Giovinazzi finishing ahead of Kimi Räikkönen.
            Haas’ Kevin Magnussen finished in fifteenth ahead of Williams’ Jack
            Aitken, who replaced George Russell. Pietro Fittipaldi in the Haas
            was the last classified driver to finish in 17th. On lap 55,
            Nicholas Latifi of Williams pulled to the side of the track and was
            out of the race due to mechanical failure was the only retirement
            other than Charles and Max.
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
