import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative mt-0'>
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
            href='https://www.planetf1.com/news/daniel-ricciardo-spa-p4/'
            target='_blank'>
            Ricciardo wary of ruining race with Max duel
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Daniel Ricciardo said he wasn’t prepared to collide with former
            team-mate Max Verstappen and ruin his race on Lap 1 of the Belgian
            GP. Ricciardo delivered a stellar qualifying performance to put his
            Renault P4 on the grid for the Belgian Grand Prix.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            And for the first half of the opening lap he enjoyed a
            back-and-forth battle with former Red Bull team-mate Verstappen over
            P3. The Dutchman would maintain the spot though and from there went
            on to run in a lonely P3 before crossing the line in that position
            with the top three staying the same for all 44 laps of the race.
            Ricciardo though went about his own race and secured a solid P4
            finish, though he was rapidly closing in on Verstappen in the final
            few laps as the top three nursed their tyres to the end.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Ultimately though a first Renault podium still eludes Ricciardo, as
            does Renault boss Cyril Abiteboul’s tattoo should Ricciardo visit
            the podium before his contract expires at the end of the season. “I
            feel our podium this year, if it happens, will be overed by the
            tattoo!,” he told Sky F1. But P4 may not have been possible if the
            Aussie had have risked it all against Verstappen at the start,
            though that is something he wasn’t prepared to do.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.planetf1.com/news/daniel-ricciardo-spa-p4/'
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
