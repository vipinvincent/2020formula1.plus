import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Right: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1595072621/contentImages/content/valtteri_-bottas_m5dgbs.jpg'
          alt=' Bottas beats Hamilton to 70th Anniversary GP pole as Hulkenberg finished stunning third!!!'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-5 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP1 REPORT - Spanish GP 2020
          </div>
          <H1>
            Bottas leads from Hamilton and Verstappen in Spanish GP first
            practice session at Barcelona
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            A familiar grid for first practice at the Spanish Grand Prix as
            Mercedes dominated with a 1-2 as Valtteri Bottas crossed the line
            fastest in the first practice session with Lewis Hamilton finished
            second with just 0.039s behind and Max Verstappen in third with 0.9s
            after the leader. Ferrari’s Charles Leclerc finished fourth with
            1.185s off Bottas and just 0.011s faster than team mate Sebastian
            Vettel, who received a new chassis for this weekend after
            discovering a “small fault” on his chassis and he looked to be more
            comfortable with the new chassis as he was able to finish closer to
            his team mate than he managed at the last race weekend. Romain
            Grosjean was a surprise sixth for Haas, 1.506s off the pace.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point’s Sergio Perez, who returns after missing the two races
            in Britain following a positive Covid-19 test, on mediums finished
            seventh, and he was 0.180s off Haas’s Grosjean. Alex Albon finished
            eighth for Red Bull with the other Haas of Kevin Magnussen just a
            hundredth off him in P9 and the second Racing Point of Lance Stroll
            rounding out the top 10 list.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Carlos Sainz of McLaren with a new chassis for this weekend finished
            P11 in FP1, while team mate Lando Norris finished 13th quickest.
            Renault’s Esteban Ocon finished 12th. The AlphaTauri drivers
            finished 14th and 17th with Pierre Gasly faster than his team mate
            Daniil Kvyat. Alfa Romeo drivers Antonio Giovinazzi and Kimi
            Raikkonen, finished P15 and P16 respectively with Daniel Ricciardo
            in the second Renault finished18th in this session, 2.445s off the
            leader. Nicholas Latifi was 19th and Williams junior Roy Nissany
            finished last in his first-ever F1 FP1 session.
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
        {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-1 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.formula1.com/en/latest/article.buxton-why-my-admiration-for-the-teams-has-never-been-higher-after-f1s.pAWHgNXi6qMlS2qQZmCVt.html'
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
                href='https://www.bbc.com/sport/formula1/53377338'
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
            href='https://www.motorsport.com/f1/news/mclaren-triple-header-races-standard/4844013/'
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
                href='https://www.skysports.com/f1/news/12433/12026519/lewis-hamilton-proud-to-master-terrifying-styrian-gp-qualifying'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150565/red-bull-expects-to-close-gap-on-mercedes-in-hungary'
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
                href='https://www.grandprix247.com/2020/07/27/seidl-triple-headers-cant-be-the-new-standard/'
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
export default Right
