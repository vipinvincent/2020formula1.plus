import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Left: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594992043/contentImages/content/mercedes12_ufegj1.jpg'
          alt=' FP2 REPORT - Spanish GP 2020'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP2 REPORT - Spanish GP 2020
          </div>
          <H1>
            Hamilton leads from Bottas and Verstappen with Ricciardo and
            Grosjean in P4 and P5
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes dominated the Friday practice as they registered their
            second one-two finish at the Circuit de Barcelona-Catalunya, with
            Lewis Hamilton heading team mate Valtteri Bottas by 0.287s in Free
            Practice 2, and Red Bull’s Max Verstappen third. Verstappen was the
            best non-Mercedes runner, 0.821s adrift of Hamilton for Red Bull.
            Daniel Ricciardo reconfirming Renault’s strong one-lap pace recently
            by going fourth fastest, 0.164s off Verstappen and Romain Grosjean’s
            Haas went one better in FP2, ending up fifth position.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari’s Charles Leclerc finished P6 as his team mate Sebastian
            Vettel struggled more in FP2, ending up in P12. to Leclerc’s P6,
            although the pair were only separated by 0.257s in FP1. Carlos Sainz
            was P7 for McLaren in his new MCL35 chassis while Sergio Perez was
            P8 on his first day back at the wheel of his Racing Point RP20 after
            testing negative for Covid-19. The second Renault of Esteban Ocon,
            who complained about a lack of rear stability on his R.S.20 before
            finishing ninth, while Pierre Gasly for AlphaTauri, finished P11
            rounding out the top 10.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The second Racing Point of Lance Stroll crossed the line in P11
            whereas Alex Albon in P13 after having made a mistake out of Turn 5
            on his fastest lap. Behind Vettel and Albon, Lando Norris finished
            14th for McLaren, ahead of the second AlphaTauri of Daniil Kvyat and
            the second Haas of Kevin Magnussen. Alfa Romeo’s Kimi Raikkonen and
            Antonio Giovinazzi had a better performance from the last race with
            P17 and P18 finishes, while Nicholas Latifi was the leading Williams
            driver as George ended up 2.508s off the ultimate pace in P20 as he
            felt his car was“driving on ice”.
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
        {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-2 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.formula1.com/en/latest/article.ferrari-chairman-admits-scuderia-will-have-to-wait-until-2022-for-return-to.UOViZyylSU8Rqamj8JxBj.html'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-300'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/formula1_qd0yzg.jpg'
                  alt='f1.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53564603'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594827284/contentImages/logo/bbc_xek5di.png'
                  alt='bbc.com/sport'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/ferrari-no-wins-2022-elkann/4845193/'
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
                href='https://www.skysports.com/f1/news/12433/12030674/hungarian-gp-practice-two-sebastian-vettel-fastest-in-wet-running'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/skysports_ruuxud.png'
                  alt='skysports.com'
                />
              </ActionLink>
            </div> */}
        {/* <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150871/ferrari-chairman-elkann-doesnt-expect-wins-until-2022'
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
                href='https://www.grandprix247.com/2020/07/14/horner-i-hope-well-be-more-competitive-in-hungary/'
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
export default Left
