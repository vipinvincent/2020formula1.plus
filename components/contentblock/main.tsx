import React from 'react'
import H1 from 'components/heading/H1'
// import ActionLink from 'components/link/ActionLink'

const Main: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-48 md:h-64 xl:h-104 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1596949811/contentImages/content/tracingpoint_qufpej.jpg'
          alt=''
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <H1>Some interesting thoughts on Racing Point Verdict by FIA </H1>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            On Friday morning, just before 70th anniversary GP weekend, the FIA
            stewards issued their verdict on the Racing Point case, which was
            based on the protests lodged by Renault at the Styrian, Hungarian
            and British GPs regarding the legality of Racing Point’s brake
            ducts. Renault believes that the front and rear brake ducts of the
            RP20 has been “copied” from the championship winning Mercedes
            design, which would not be allowed as per the rules governing listed
            parts. After upholding Renault's protest over its controversial car
            FIA fined Racing Point €400,000 and deducted 7.5 world championship
            points per car, but is allowed to keep using the same duct design
            for the rest of the season.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            In its statement, the FIA concluded that Racing Point's s brake duct
            design was in breach of F1's design rules although the team had
            taken delivery of a complete set of Mercedes 2019 brake ducts on 6
            January. FIA accept Racing Point's argument of front brake duct
            design, which had been an evolution of what the team used last year.
            Whereas the stewards rejected that notion regarding the rear brake
            ducts which was conceived using CAD drawings of the brake ducts on
            Mercedes’ W10 car stating "Since the RP20 RBDs [rear brake ducts]
            were not run on the RP19 in 2019 and since the Stewards believe that
            the design effort expended by Racing Point in adapting the RBDs
            originally designed by Mercedes for the W10 pales in comparison to
            the significance of the original Mercedes work, the Stewards
            conclude that the principal designer of the RP20 RBDs was Mercedes,
            not Racing Point."
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Since the verdict finds Racing Point guilty at the same time allows
            the team to continue use those parts, the rival teams are obviously
            not happy and plans to lodge protest against the judgement. Half the
            grid has already said they intend to appeal against the decision to
            punish Racing Point for illegally copying Mercedes parts. Meanwhile
            it was confirmed that Racing Point had signaled their intent to
            appeal the verdict; which means the six of the ten teams will be
            protesting the judgement and the final verdict/resolution awaits as
            the season progresses.
          </p>
          <p className='mt-1'>
            But looking in broad sense, “is copying the championship car” such a
            big crime? Considering the fact that Racing Point Formula 1 team
            posted a loss of £116m in its first year of operation, which was
            closer to £25m while taking over the Force India team from
            bankruptcy, this looks not a big crime. The budget and the earnings
            of the primary 5 teams Mercedes, Ferrari, Red Bull, Renault and
            McLaren accommodate around 75% of the entire F1 consortium, small
            teams like Racing Point with small budget and low infrastructure
            can’t expect to be in top 3 during races. So probably the only
            option for smaller teams to be in racing contention with other top
            teams is being getting inspired or so-called “tracing”. Take the
            case of Ferrari, one of the top team in F1, with all budget and
            infrastructure the team is struggling only for the CEO himself came
            to say that it will take another 2 years for them to be in title
            contention or for winning races on regular basis. So how could we
            expect a team of Racing Point’s caliber to be in the racing
            contention if a huge team like Ferrari can’t do it in a smaller time
            phase.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            It is not a secret that F1 is the considered to be a competition of
            exploring the loop holes of the rules and regulations. In the past
            many teams have succeeded doing so, the current Formula One managing
            director, motor sports and technical director, Ross Brawn being the
            classical example with Brawn GP. So, if the rules and regulations
            are not well written nor the administration allows the discovery of
            ambiguities no one can be made accountable for such issues nor
            claims. More over F1 is a sporting completion where teams should
            have similar grounds or have a platform to become competitive, or
            else people will lose interest in such events. Just check the 2020
            season, we have only a single race winning team and the rest are
            struggling to get somewhere near to the team. So, it not a big deal
            to predict the certain winner of the race. Probably 2020 season will
            be on only season in last decade to have a championship winner even
            before the season opening, which is a disaster.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            It is undeniable that F1 is/will be boring and losing the fans or
            spectators if the event is not competitive. Either the rules and
            regulations needed to be transparent or the teams should be given
            similar grounds to become aggressive so as to have a better, dynamic
            and un-predictable races.
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
