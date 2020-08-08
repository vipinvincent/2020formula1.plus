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
            href='https://www.autosport.com/f1/news/151192/ocon-handed-threeplace-grid-drop-for-russell-block'
            target='_blank'>
            Ocon handed three-place F1 grid penalty after blocking Russell
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Esteban Ocon has been handed a three-place grid penalty for Formula
            1's 70th Anniversary Grand Prix after blocking George Russell during
            qualifying on Saturday. While passing a slow-moving Antonio
            Giovinazzi, Renault driver Ocon was caught out on the racing line as
            Russell came through on a hot lap during Q1 at Silverstone, forcing
            the Williams to back off.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Russell was quick to complain over team radio about Ocon's move,
            saying the Frenchman "massively got in my way" and was "mega
            dangerous". Ocon went on to qualify 11th for Renault, but was braced
            for a penalty after talking to race engineer Mark Slade over team
            radio in the garage, saying: "That wasn't good, Mark."
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            When Ocon asked if he would be penalised for the move, Slade
            replied: "Yes." Ocon and Russell were both called to see the
            stewards about the incident following qualifying, with the brief
            hearing resulting in a three-place grid drop for Ocon.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151192/ocon-handed-threeplace-grid-drop-for-russell-block'
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
