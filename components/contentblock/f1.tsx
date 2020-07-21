import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-2'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594990598/contentImages/content/ferarri_gxis2s.jpg'
          alt='The entire car project has to be revised admits Binotto – but says sacking people is not the answer'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.what-the-teams-said-race-day-in-hungary-2020.5WTtNGjEHgUNZoA0v4rpU0.html'
            target='_blank'>
            ‘The entire car project has to be revised’ admits Binotto – but says
            sacking people is not the answer
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Fifth in the constructors’ championship for Ferrari after three
            races is simply not good enough. Ferrari Team Prinicpal Mattia
            Binotto has already said as much, so it’s not surprising to hear him
            say “the entire car project has to be revised” as they look to
            rebound…
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Sebastian Vettel finished a season’s best sixth at the Hungaroring,
            but his team mate Charles Leclerc finished outside of the points,
            and both cars suffered the ignominy of finishing a lap down.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Worse still, while the upgrade introduced for the Styrian GP
            correlated with the data, it did not cut the deficit to Mercedes as
            anticipated. “After three races, it’s clear that we are in worse
            shape than we expected and we need to react without delay,” said
            Binotto. “The entire car project has to be revised, while taking
            into consideration the limits currently imposed by the regulations.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            “I am well aware there is no magic wand in Formula 1, but we have to
            step up a gear to turn things around, both in the short and the long
            term. It might also be necessary to look at our organisation to
            improve and strengthen our working methods where the need is
            greatest. But first, as a team, we need to understand the dynamic
            that led to this situation.”
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Tough words from Binotto, but in suggesting an assessment of their
            current organisation was needed, the Ferrari boss insisted that did
            not mean people would be sacked for the poor form. “I have
            confidence in the people who work in the Gestione Sportiva,” he
            said. “We have started out on a long process that should lead to
            another winning cycle. It will take a while, but the whole company
            understands and supports this vision. That’s why I find it amusing
            to read some stories that are doing the rounds: it’s not by sacking
            people that you make a car go faster…”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.what-the-teams-said-race-day-in-hungary-2020.5WTtNGjEHgUNZoA0v4rpU0.html'
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
