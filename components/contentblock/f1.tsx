import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-50 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1596777189/contentImages/content/f170_iwh29t.jpg'
          alt='‘As a team we were sleeping’ – Bottas points finger at Mercedes strategy as he slips from pole to third'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.as-a-team-we-were-sleeping-bottas-points-finger-at-mercedes-strategy-as-he.7fJk8nQbpTvmIa8hcNUEqM.html'
            target='_blank'>
            ‘As a team we were sleeping’ – Bottas points finger at Mercedes
            strategy as he slips from pole to third
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            After turning the tide on Mercedes team mate Lewis Hamilton in
            qualifying for the 70th Anniversary Grand Prix on Saturday, Valtteri
            Bottas was understandably delighted. But his demeanour couldn’t have
            been more different after the race on Sunday as he slipped behind
            both Hamilton and Red Bull’s Max Verstappen to finish third, with
            the Finn quick to point a finger at his team’s strategy calls after
            the race.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Bottas led away from Hamilton at the start and maintained that lead
            into the first pit sequence, even as Mercedes’ struggles with
            blistering started to ring alarm bells for the team’s strategists.
            Bottas stopped on lap 13, swapping his medium tyres for hards and
            staying ahead of Hamilton when he made the same move a lap later.
            This allowed the hard-starting Verstappen to charge into the lead,
            and though he momentarily lost the lead back to Bottas when he
            stopped for mediums on lap 27, the Dutchman was able to sweep back
            past the Finn for the lead shortly after.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            From then on, Bottas had no challenge for the Red Bull driver,
            stopping for the second and final time on the same lap as
            Verstappen, but struggling with blistering on his final set of tyres
            far more than the Dutchman. “Very frustrating, obviously, starting
            from pole and finishing third is not ideal,” he said. “I think as a
            team we were sleeping at some point when Max managed to get ahead of
            us, and my strategy was far, far from ideal so, lots to lean from
            today I think.”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.as-a-team-we-were-sleeping-bottas-points-finger-at-mercedes-strategy-as-he.7fJk8nQbpTvmIa8hcNUEqM.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for More Details...
          </p>
        </div>
        {/* <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
          <div className='w-full text-sm md:w-3/12 pb-4 md:pb-0 md:pr-4 leading-tight pt-2 md:pt-6'>
            Follow this topic on -
          </div>
          <div className='w-full flex flex-row justify-center md:justify-start md:w-9/12'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.bbc.com/sport/formula1/53384460'
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
                href='https://www.motorsport.com/f1/news/explained-why-renault-launched-a-racing-point-protest/4833433/'
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
                href='https://www.autosport.com/f1/news/150550/why-racing-point-brake-ducts-are-key-to-renault-protest'
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
                href='https://the-race.com/formula-1/perez-approached-by-other-team-amid-vettel-aston-rumours/'
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
                href='https://www.grandprix247.com/2020/07/14/wolff-we-havent-seen-the-full-potential-of-mercedes-or-red-bull/'
                target='_blank'>
                <img
                  className='w-auto h-8 mt-0 p-3 object-contain rounded border border-gray-200'
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
                  className='w-auto h-8 mt-0 p-2 object-contain rounded border border-gray-200'
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
export default F1
