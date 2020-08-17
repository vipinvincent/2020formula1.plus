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
            Perez/Kvyat Spanish GP penalties first in FIA crackdown on F1 blue
            flags
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The penalties handed to Sergio Perez and Daniil Kvyat for ignoring
            blue flags in the Spanish Grand Prix were the first as part of a new
            crackdown by the FIA.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Both Perez and Kvyat were hit with a five-second time penalty for
            failing to adhere to blue flags in the closing stages of the race at
            the Circuit de Barcelona-Catalunya as they were lapped by the
            leading cars. Perez was penalised for failing to move out of the way
            of race leader Lewis Hamilton through the final sector of the track,
            instead moving aside on the start/finish straight.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Racing Point driver called the penalty "very unfair" after it
            dropped him from fourth place on the road to fifth in the final
            classification. AlphaTauri's Kvyat was also found to have failed to
            obey blue flags between Turn 6 and Turn 1 at the start of the next
            lap when being lapped, but remained 12th despite the five-second
            penalty. FIA race director Michael Masi explained the sanctions came
            about as a result of talks with drivers about being stricter in
            enforcing the blue flag rules earlier this year
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
