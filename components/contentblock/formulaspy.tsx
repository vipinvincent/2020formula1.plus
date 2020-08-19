import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const PlanetF1: React.FC = () => {
  return (
    <div className='relative  mt-0'>
      <div className='h-32 sm:h-48 w-full bg-white-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl p-12 border-b border-gray-200'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1597816175/contentImages/logo/formulaspy-logo_oquql8.png'
          alt='formulaspy.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 pt-4 pb-2 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://formulaspy.com/features/is-vettel-going-to-racing-point-a-done-deal-70799'
            target='_blank'>
            Is Vettel going to Racing Point a done deal?
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Sebastian Vettel’s most likely destination for 2021 appears to be
            Racing Point, so can we expect an announcement soon? The ongoing
            saga regarding Sebastien Vettel’s Formula One racing future took
            another twist recently when Vettel was spotted getting a ride in the
            Ferrari of Racing Point team co-owner Otmar Szafnauer.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Rumors have linked Vettel to Racing Point for several months now as
            the four-time F1 world driving champion will leave Ferrari at the
            end of the current season. Pressed about whether he’d taken a spin
            with Szafnauer, Vettel acknowledged that he indeed had shared a ride
            with the rival team owner.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            “It is correct. We were heading to the fuel station,” Vettel said at
            Silverstone. “After the fuel station he was going home and I
            continued going somewhere else. It’s a nice car. A Ferrari Pista and
            I remember years ago he was talking about that car and now he
            obviously got one.” “I find it a bit awkward nowadays that people
            make a fuss out of everything. I don’t see the news in that.”
            Vettel, 33, was also spotted sharing an elbow bump with Racing Point
            co-owner Lawrence Stroll. Again, he readily downplayed any
            significance to the moment.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://formulaspy.com/features/is-vettel-going-to-racing-point-a-done-deal-70799'
              target='_blank'>
              formulaspy.com
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
