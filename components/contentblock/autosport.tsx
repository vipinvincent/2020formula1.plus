import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const AutoSport: React.FC = () => {
  return (
    <div className='relative  mt-0'>
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
            href='https://www.autosport.com/f1/news/151781/russell-thankful-for-halo-after-scary-crash'
            target='_blank'>
            Russell thankful for halo after "scary" F1 Belgian GP crash
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            George Russell felt "very thankful" to have the halo on his Williams
            Formula 1 car after a "massive impact" with Antonio Giovinazzi's
            loose wheel in Sunday's Belgian Grand Prix.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Giovinazzi crashed at the exit of Les Fagnes on Lap 10 of the race,
            spinning into the barrier on the right-hand side of the track. The
            Alfa Romeo car bounced back towards the racing line, forcing Russell
            to take evasive action and crash his Williams into the wall on the
            left-hand side of the track. A loose wheel from Giovinazzi's car hit
            the front-left wheel on Russell's car during the collision, but both
            were able to get out of their machines unharmed.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The crash resulted in the safety car being deployed while the cars
            were removed and the debris strewn across the track was cleared, but
            there was no need for a red flag. Speaking after returning to the
            paddock, Russell called the crash "very unlucky" and said there was
            "nowhere I could have gone" to avoid the collision. The Williams
            driver also paid tribute to the halo cockpit protection on his car,
            saying it was quite scary to see an errant tyre coming towards him.
            "But I have to say you feel much safer in the car now with the halo.
            Russell said.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151781/russell-thankful-for-halo-after-scary-crash'
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
