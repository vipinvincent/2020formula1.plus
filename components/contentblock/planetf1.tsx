import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-0'>
      <div className='h-32 sm:h-48 w-full bg-white-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl p-12 border-b border-gray-200'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/planetf1_zqhrq9.svg'
          alt='planetf1.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Feature
          </div>
          <ActionLink
            href='https://www.planetf1.com/news/christian-horner-racing-point-copycat/'
            target='_blank'>
            Horner weighs in on Racing Point copycat saga
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Christian Horner suspects that Racing Point are playing within the
            rules in their decision to follow the Mercedes development path
            rather than their own.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Racing Point ripped up their own philosophy and decided to be
            inspired by the dominant Mercedes team when it came to producing the
            RP20 for the 2020 campaign. From the outset, the team soon to be
            known as Aston Martin has always strongly denied any suggestions of
            any wrongdoing.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            The change in development approach has resulted in the RP20 looking
            an awful lot like the 2019 Mercedes W10 and it is now the subject of
            what is going to be a lengthy FIA investigation, with a verdict on
            its legality not expected until the Silverstone double header,
            following a protest by Renault after the conclusion of the Styrian
            Grand Prix. “I’ve always stood by the fact it is easier to sell a
            car than to copy it,” Horner told Sky Sports F1.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/news/christian-horner-racing-point-copycat/'
              target='_blank'>
              planetf1.com
            </ContentLink>{' '}
            for more details...
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
