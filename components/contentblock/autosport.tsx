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
            href='https://www.autosport.com/f1/news/151237/bottas-mercedes-sleeping-when-verstappen-got-ahead'
            target='_blank'>
            Bottas: Mercedes "sleeping" when Verstappen got ahead in F1 70th
            Anniversary GP
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Valtteri Bottas says Mercedes was "sleeping at some point" when Max
            Verstappen managed to get ahead en route to victory in the Formula 1
            70th Anniversary Grand Prix.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Bottas led the early part of the race after starting on pole
            position, but struggled for pace after switching to the hard
            compound tyre for the second stint. Red Bull opted to keep
            Verstappen out for a long first stint on the hard tyre, during which
            he was able to match Bottas' pace despite the Finn having pitted for
            a fresher set.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            It meant that by the time Verstappen took his first pit stop, he
            emerged just behind Bottas before passing into Brooklands on his
            out-lap, before going on to take a commanding victory. Bottas
            ultimately finished the race third on a two-stop strategy after
            being passed by Mercedes team-mate Lewis Hamilton in the closing
            stages. "Very frustrating obviously, starting from pole and
            finishing third is not ideal," Bottas said after the race.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151237/bottas-mercedes-sleeping-when-verstappen-got-ahead'
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
