import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const AutoSport: React.FC = () => {
  return (
    <div className='relative bg-white-50 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
      <div className='h-32 sm:h-48 w-full bg-black-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl bg-autosports'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
          alt='autosport.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.autosport.com/f1/news/151450/vettel-nothing-to-lose-with-risky-onestop-strategy'
            target='_blank'>
            Vettel: Ferrari had "nothing to lose" with risky one-stop strategy
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Sebastian Vettel says there was "nothing to lose" with the risky
            one-stop strategy in the Spanish Grand Prix that lifted him to
            seventh place at the chequered flag. After qualifying 11th, Vettel
            spent the opening stint of the race sitting outside of the points
            before pitting on lap 29 for a set of soft tyres - losing a position
            to Daniil Kvyat in the process.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Vettel was Ferrari's sole remaining driver in the race just after
            half distance when team-mate Charles Leclerc was forced to retire
            due to an electrical issue. The four-time world champion asked the
            Ferrari pit wall via team radio whether he should manage his tyres
            to attempt a one-stop strategy, having risen to fifth place after
            cars ahead had pitted for a second time.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Despite being overtaken by Lance Stroll and Carlos Sainz Jr in the
            closing stages, Vettel was able to hold on to seventh ahead of Red
            Bull's Alexander Albon after making his soft tyres last 36 laps.
            "It's quite simple, we didn't have anything to lose," Vettel said of
            the decision to switch to a one-stop strategy. "We were P11, and I
            think we were trying to offset until the end of the race, so
            obviously we were catching the cars in front. "They pitted for their
            second stop, but I was not in a rush to catch them and [was]
            managing the tyres.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151450/vettel-nothing-to-lose-with-risky-onestop-strategy'
              target='_blank'>
              autosport.com
            </ContentLink>{' '}
            for More Details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'> */}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://www.formula1.com/en/latest/article.racing-point-dont-have-space-for-vettel-in-2021-says-szafnauer.1xIcoT6yFDRBjGLh6xeDaQ.html'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded border border-gray-300'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826933/contentImages/logo/icon_ufqtuk.png'
                    alt='f1.com'
                  />
                </ActionLink>
              </div>*/}
          {/* <div className='mr-2'>
                <ActionLink
                  href='https://www.motorsport.com/f1/news/drugged-up-norris-expecting-back-issues-in-race/4831384/'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                    alt='motorsport.com'
                  />
                </ActionLink>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default AutoSport
