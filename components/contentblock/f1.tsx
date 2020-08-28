import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative  mt-0'>
      <div className='h-32 sm:h-84 w-full bg-white-100 rounded-tl-xxl '>
        <img
          className='w-full h-full object-contain rounded-tl-xxl'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1596777189/contentImages/content/f170_iwh29t.jpg'
          alt='F1.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.sad-to-see-ferrari-so-far-down-says-leclerc-as-team-slump-to-p15-and-p17-in.3TWOHANG4I7JaacH6S2X3D.html'
            target='_blank'>
            ‘Sad to see Ferrari so far down’ says Leclerc as team slump to P15
            and P17 in Spa second practice
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            1.317s – that was how much slower Ferrari were in FP2 for the 2020
            Belgian Grand Prix than they had been at the same track in 2019. And
            having led the session for the team last year before going on to
            score pole position and take his maiden victory, Charles Leclerc
            admitted he was “sad” to see how far the Scuderia had fallen.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            In what has been a difficult season anyway for Ferrari, Friday’s lap
            times at Spa-Francorchamps nonetheless made for sobering reading,
            Leclerc ending up 1.696s off the pace of Red Bull’s Max Verstappen
            in 15th place in FP2 – and just 0.023s up on the Williams of George
            Russell – while Sebastian Vettel fared even worse, the three-time
            Spa winner taking the 17th fastest time, just 0.091s ahead of the
            second Williams of Nicholas Latifi.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            “A very difficult day,” was Leclerc’s grim assessment at the end of
            Friday. “I think it’s probably a surprise to be so far back,
            especially in FP2. We tried quite a lot of things in FP2. "At the
            beginning I tried something quite aggressive in downforce levels but
            it didn’t really work out so we came back on that, and we are just
            lacking pace at the moment so we need to work hard to catch back.
            But I don’t expect miracles for this weekend. “It doesn’t feel good
            and it’s sad to see Ferrari so far down,” Leclerc added, “but as
            always, our work as drivers is to give our best and that’s exactly
            what I’m trying and what Seb is trying to do in the car.”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.sad-to-see-ferrari-so-far-down-says-leclerc-as-team-slump-to-p15-and-p17-in.3TWOHANG4I7JaacH6S2X3D.html'
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
