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
        <div className='px-4 pt-4 pb-5 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.autosport.com/f1/news/151181/five-teams-to-appeal-racing-point-brake-duct-verdict'
            target='_blank'>
            Five F1 teams to appeal against Racing Point brake duct verdict
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Five Formula 1 teams have filed their intent to appeal the Racing
            Point brake duct case - with the Silverstone outfit itself facing up
            against a group of four rivals.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            On Friday morning the FIA stewards issued their verdict on the case,
            which centred on the protests lodged by Renault at the Styrian,
            Hungarian and British GPs regarding the legality of Racing Point's
            brake ducts.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Racing Point was fined €400,000 and docked 15 World Championship
            points, but is allowed to keep using the same duct design for the
            rest of the season. Due to the complex nature of the case teams were
            given 24 hours after the publication of the verdict to log their
            intention to appeal, instead of the usual hour.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            When the deadline passed at 0930 this morning both original parties
            had taken up the option. Racing Point wants to clear its name, while
            Renault has questioned the penalty. Other interested parties are
            allowed to appeal, and Ferrari, McLaren and Williams have all joined
            Renault's efforts to secure a tougher sanction. An FIA spokesman
            confirmed: "We have received notices of intention to appeal the
            Renault Protest Decision from the following Competitors: Ferrari,
            McLaren, Racing Point, Renault and Williams." All five teams now
            have a further period of 96 hours in which to consider their options
            and decide whether to proceed with their appeals.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151181/five-teams-to-appeal-racing-point-brake-duct-verdict'
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
