import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative  mt-0'>
      <div className='h-32 sm:h-48 w-full bg-white-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl p-12 border-b border-gray-200'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
          alt='planetf1.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.planetf1.com/news/ferrari-enter-into-racing-point-copycat-saga/'
            target='_blank'>
            Ferrari enter into Racing Point copycat saga
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            On the eve of the FIA’s hearing regarding the legality of the Racing
            Point’s RP20, Ferrari has written to Formula 1 and FIA asking for
            clarification of their own. The main dissenting voice against the
            Racing Point and the RP20 which has been heavily inspired by the
            Mercedes W10 has been Renault.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Enstone team has launched not one, not two, but three official
            protests as part of the FIA’s lengthy investigation into the RP20,
            and more specifically its brake ducts. Racing Point say they bought
            the brake ducts from Mercedes before they became a listed part in
            2019 and used that knowledge for the 2020 version. Renault claim
            Mercedes has sent drawings of the brake ducts for Racing Point to
            copy which is against the rules.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            With the governing body poised to pass on their judgement on
            Wednesday, the Scuderia has written to them and Formula 1 as they
            now want further clarification on the whole reverse engineering
            process allowed in the sport.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/news/ferrari-enter-into-racing-point-copycat-saga/'
              target='_blank'>
              planetf1.com
            </ContentLink>{' '}
            for More Details...
          </p>
          {/* <div className='flex flex-col justify-start border-t border-gray-200 mt-4 pb-2 px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.motorsport.com/f1/news/williams-wolff-shareholding-mercedes/4830004/?ic_source=home-page-widget&ic_medium=widget&ic_campaign=widget-6'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/motorsport_acmgji.jpg'
                    alt='motorsport.com'
                  />
                </ActionLink>
              </div>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.autosport.com/f1/news/150472/williams-explains-wolff-shareholding-in-team'
                  target='_blank'>
                  <img
                    className='w-auto h-8 object-contain rounded'
                    src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/autosport_ketnss.jpg'
                    alt='autosport.com'
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
export default PlanetF1
