import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-2'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Autodromo_aerea_poster.jpg/1280px-Autodromo_aerea_poster.jpg'
          alt='6 reasons to be excited about the three new additions to F1’s 2020 race calendar'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.6-reasons-to-be-excited-about-the-three-new-additions-to-f1s-2020-race.4c3gUGmRk3AFjxL5aLq0Xx.html'
            target='_blank'>
            6 reasons to be excited about the three new additions to F1’s 2020
            race calendar
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Three new races at Imola, Portimao and the Nurburgring have been
            added to F1’s revised 2020 race calendar, and we couldn’t be more
            excited. Here’s why you should be too.
            <br />
            Imola’s two-day format will spice things up… Aside from rain
            interfering with proceedings, the modern Grand Prix weekend follows
            a familiar format: three days comprising of three practice sessions
            to dial-in set-up, assess tyres and test new parts, followed by
            qualifying and the race. But for the Emilia Romagna Grand Prix at
            Imola, that will be shaken up with the teams expected to have just
            one practice session to prepare ahead of qualifying and the race.
            The bad news means one fewer days to see F1’s best tackle the
            magnificent challenge of Imola; the good news is that there’ll be
            masses of action packed into two days – and hopefully plenty of
            unpredictability. We can’t wait!
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            …not that ‘old school’ Imola needed spicing up
            <br />
            When AlphaTauri tested at Imola ahead of 2020’s first race in
            Austria, Daniil Kvyat and Pierre Gasly raved about the Italian
            track. Neither has raced it in an F1 car, but both came away wanting
            to. “It’s quite old school, it’s quite bumpy, the kerbs are
            challenging,“ buzzed Kvyat. “You have these high-speed corners with
            such a short run-off area, you really feel you’re at the limit of
            the car,” added Gasly. F1 hasn’t raced at the circuit since 2006,
            which makes the prospect of seeing a modern car tackling the
            spectacular Acque Minerali or Rivazza even more tantalising. Imola
            is often remembered for tragedy, but it’s also played host to some
            epic moments – Alonso vs Schumacher in 2005, anyone? - and we can’t
            wait for more!
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            F1 is going back to Portugal for the first time since 1996
            <br />
            Portugal has played host to some truly brilliant F1 moments over the
            years: Stirling Moss’s brilliant win at Porto in 1958, Niki Lauda’s
            dramatic half-point title win over Alain Prost in 1984, and Ayrton
            Senna’s unforgettable maiden F1 victory in the wet in 1985, to name
            just three. But Grand Prix racing has not been back to
            motorsport-mad Portugal since Jacques Villeneuve took victory for
            Williams in 1996, so it’s great that F1 is heading to the Algarve
            International Circuit in Portimao for the first time. The
            picturesque track, situated in the very south of the country, will
            become the fourth Portuguese circuit after Porto, Monsanto and
            Estoril to host a round of the world championship – and even better,
            it’s going to be open to fans.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.6-reasons-to-be-excited-about-the-three-new-additions-to-f1s-2020-race.4c3gUGmRk3AFjxL5aLq0Xx.html'
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
