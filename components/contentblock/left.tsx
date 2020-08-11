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
          alt=' Lewis Hamilton with a new lap record storms to pole position for British Grand Prix with Bottas in P2 and Max Verstappen in P3.'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-1 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            FP3 Report - 70th Anniversary GP
          </div>
          <H1>
            Mercedes' Lewis Hamilton topped final practice from his team mate
            Valtteri Bottas and Mclaren's Lando Norris.
          </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Mercedes embraces yet another 1-2 in the final practice session for
            the 70th Anniversary GP displaying their dominance in this season.
            Hamilton's lap of 1m26.621s was on soft tyres which was 0.163s ahead
            of Bottas as Mercedes completed a clean sweep of fastest times in
            all practice sessions. Lando Norris, who briefly topped the times,
            finished in third, over half a second off Hamilton's best time on
            medium tyres. Lando predominantly was on mediums while rest of the
            pack were testing the red striped softs which was last weeks
            mediums.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Both Racing Points were strong and finished in top 5 with Nico
            Hulkenberg leading Lance Stroll by just 0.007s. Meanwhile the RP20s
            are still the point of talk at off-track after the FIA confirmed
            five teams intend to appeal the stewards' verdict allowing Racing
            Point to use offending parts on their cars and Racing Point too
            confirmed their intention to appeal brake duct protest verdict after
            FIA on deducting 15 points and fining them €400,000.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ferrari’s Charles Leclerc finished 6th and his team mate Sebastian
            Vettel, who ended the session in P13, took brand new engines, turbos
            and MGU-H units ahead of FP3 as Vettel’s Ferrari power unit having
            issues and leakage at the end of FP2 on Friday. According to
            Ferrari, the change on Leclerc's car was done “as a precaution”,
            with no penalty incurred for either of the drivers since they are
            still within their allocation for the season.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Red Bull driver Max Verstappen only could finish P7, ahead of
            team mate Alex Albon in P8 since Max had to abort his first flying
            lap on new soft tyres only to a slow-going Stroll through
            Maggotts/Becketts. Renault's Esteban Ocon managed a ninth-place
            finish over McLaren’s Carlos Sainz, while Daniel Ricciardo, who was
            third quickest in FP2 on Friday only finished 14th overall as his
            final flying laps too were hampered by traffic. Pierre Gasly beat
            his AlphaTauri team mate by a tenth of a second to finish P11, with
            Daniil Kvyat P12 ahead of Vettel's Ferrari.
          </p>
          {/* <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
           
          </p> */}
          {/* <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            So, it was yet another dominating performance by Mercedes who
            unsurprisingly finished 1-2 for the 70th Anniversary Grand Prix
            weekend. But The weekend will get interesting as Honda will give Red
            Bull Formula 1 drivers Max Verstappen and Alexander Albon new power
            units ahead of this weekend’s 70th Anniversary Grand Prix. Albon
            took a new energy store on his Honda power unit last weekend at the
            British Grand Prix, but will now also take a second engine,
            turbocharger, MGU-H and MGU-K for the race.
          </p> */}
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
