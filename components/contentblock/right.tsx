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
            Qualifying Report - 70th Anniversary GP
          </div>
          <H1>
            Bottas beats Hamilton to 70th Anniversary GP pole as Hulkenberg
            finished stunning third!!!
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Valtteri Bottas celebrated his extension of contact at Mercedes with
            top position in qualifying and thereby beating Mercedes team mate
            Lewis Hamilton who finished just 0.063s behind. The super sub Nico
            Hulkenberg took a astounding third for the 70th Anniversary Grand
            Prix at Silverstone. It should be noted that both Mercedes drivers
            crossed the line in medium while Nico did his fastest lap on soft.
            The German was one tenth of a second clear of Red Bull’s Max
            Verstappen. Meanwhile Daniel Riccardo on mediums finished an
            impressive fifth, equaling Renault’s best performance in the season
            completes top 5.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The second Racing point of Stroll finished P6 with Pierre Gasly
            continuing his brilliant start to the 2020 campaign with a stunning
            P7 for AlphaTauri. Ferrari’s Charles Leclerc only managed P8, which
            is Ferrari’s worst performance at Silverstone since 2014, with team
            mate Sebastian Vettel failing to qualify Q2, who eventually finished
            at a disappointing 12th. Red Bull’s Alexander Albon could make
            through Q3 comfortable, this time and ended up half a second behind
            team mate Verstappen. McLaren’s Lando Norris rounded out the top 10
            list.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Esteban Ocon of Renault finished eleventh ahead of Sebastian Vettel
            who had engine leakage issues in practice session; Later Esteban
            Ocon has been handed a three-place grid penalty after blocking
            George Russell during qualifying on Saturday. Second McLaren of
            Carlos Sainz only managed thirteenth spot in the starting grid just
            ahead of Haas’ Romain Grosjean who made it to Q2. Williams’ George
            Russell was again impressive on Saturday with a Q2 promotion but
            only managed fifteenth position in the grid. Second Williams car of
            Nicolas Latifi managed p18 while both Alfa Romeos struggled again in
            qualifying with both cars routed to rear end of the qualifying list.
            Kimi Räikkönen finished 20th with his team mate Antonio Giovinazzi
            out preforming again in Saturday Qualifying.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            “It feels good,” said pole-sitter Valtteri Bottas during post
            qualifying conference. “I just love qualifying, especially when it
            goes well."
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'></p>

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
