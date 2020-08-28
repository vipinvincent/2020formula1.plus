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
            href='https://formulaspy.com/f1/ricciardo-not-surprised-by-strong-practice-showing-70893'
            target='_blank'>
            Ricciardo ‘not surprised’ by strong practice showing
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Belgian Grand Prix – Renault’s Daniel Ricciardo finished P2 at the
            end of Friday’s practice, despite a late technical issue with his
            R.S.20. Renault’s Daniel Ricciardo finished in P2 at the end of
            Friday’s track time, finishing less than a tenth behind pacesetter
            Max Verstappen. He did 21 laps in the morning session en route to
            P9, before vaulting up to P2 in second practice with 12 laps on the
            board.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            “It was another good FP2 as has been the case for us at the last few
            rounds.” said Ricciardo afterwards. “We have to do it tomorrow,
            though, as that’s when it counts. Today was strong, even with the
            issue at the end.” Ricciardo had been on a push lap towards the end
            of the session when he suffered a mechanical problem coming over the
            crest at Radillion, with the car seeming to go into neutral. The
            Australian driver brought the car to a controlled stop along the
            Kemmel Straight, triggering Virtual Safety Car conditions while the
            car was recovered.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Renault later confirmed it was a hydraulic issue on the car, leading
            Ricciardo to stop the car as a precaution. “For safety, we pulled
            the car over as there’s no point taking risks with mechanical issues
            on Fridays.” Ricciardo explained. “Our low fuel run was a good one.
            During the lap, I knew it felt good and sometimes you just know when
            the car’s working. I knew it was competitive and I wasn’t that
            surprised it was up there on the timesheets. It was a good day and
            we certainly understood a lot from it.”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://formulaspy.com/f1/ricciardo-not-surprised-by-strong-practice-showing-70893'
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
