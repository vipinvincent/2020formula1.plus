import React from 'react'
import H1 from 'components/heading/H1'
import ActionLink from 'components/link/ActionLink'

const Left: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-40 xl:h-48 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594992043/contentImages/content/mercedes12_ufegj1.jpg'
          alt='Mercedes dominates FP1 - Hamilton leads the timesheets in Hungarian GP first practice'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Latest News
          </div>
          <H1>
            {' '}
            Mercedes dominates FP1 - Hamilton leads the timesheets in Hungarian
            GP first practice
          </H1>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Lewis Hamilton leading a dominant Mercedes one-two ahead of Valtteri
            Bottas. Hamilton set his fastest time - a 1:16.003 - on the hardest
            tyre available which is incredible. Mercedes' close rival, Red Bull
            had a low start to the weekend with P8 and P13 for Max Verstappen
            and Alex Albon respectively; while Ferrari again finished well
            behind of the practice pace setters in P6 and P7.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Racing Point's Sergio Perez was third, 0.527secs adrift, and
            0.437secs ahead of team-mate Lance Stroll. Renault's Daniel
            Ricciardo took fifth. Lando Norris and Esteban Ocon rounded out the
            top 10 for McLaren and Renault, with Norris’s McLaren team-mate
            Carlos Sainz Jr close behind in 11th.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Red Bull's pace was at a low level since they were running in a
            possible different specification than the others. Sebastian Vettel
            was the lead driver for the Ferarri on a 1m17.238s and Charles
            Leclerc was 0.166s behind his team-mate.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Romain Grosjean was 14th, ahead of Williams’ Nicholas Latifi, who
            finished 15. Daniil Kvyat was 16th Alfa Romeo's Antonio Giovinazzi
            in 17th. George Russell and guest-participant Robert Kubica were the
            last of the drivers to set a time, as Pierre Gasly failed to leave
            the garage with an issue on his Honda engine
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The session was affected by intermittent light rain. But the drivers
            was not affected as they continued the session using dry-weather
            'slick' tyres. Spots of rain over the Hungaroring for Free Practice
            1 indicates a sign of things to come during weekend.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Racing Point enter the weekend without having a resolution to the
            protest lodged by Renault in Austria. Renault are arguing that
            Racing Point, the 'Pink Mercedes' for its similarity to the 2019
            car, have copied the designs of the brake ducts of last year's
            Mercedes car.
          </p>
          {/* <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.we-havent-seen-the-full-potential-of-mercedes-or-red-bull-yet-says-wolff.4hSJsAzStntPh9H8WI6fDQ.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for more details...
          </p> */}
        </div>
        <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
          <div className='w-full py-2 text-sm'>Follow this topic on -</div>
          <div className='w-full flex flex-row justify-center my-1'>
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
            <div className='mr-2'>
              <ActionLink
                href='https://www.motorsport.com/f1/news/red-bull-albon-slow-pace-styria/4833470/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                  alt='motorsport.com'
                />
              </ActionLink>
            </div>
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
            <div className='mr-2'>
              <ActionLink
                href='https://www.autosport.com/f1/news/150565/red-bull-expects-to-close-gap-on-mercedes-in-hungary'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 object-contain rounded-tl-lg rounded-br-lg'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
                  alt='autosport.com'
                />
              </ActionLink>
            </div>
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
            <div className='mr-2'>
              <ActionLink
                href='https://www.grandprix247.com/2020/07/14/horner-i-hope-well-be-more-competitive-in-hungary/'
                target='_blank'>
                <img
                  className='w-auto h-6 md:h-12 mt-0 py-2 md:py-4 px-2 object-contain rounded-tl-lg rounded-br-lg border border-gray-200'
                  src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/grandprix247_yj6fcw.png'
                  alt='grandprix247.com'
                />
              </ActionLink>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
export default Left
