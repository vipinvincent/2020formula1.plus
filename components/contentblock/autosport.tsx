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
            href='https://www.autosport.com/f1/news/151730/verstappen-not-expecting-pole-fight-with-mercedes'
            target='_blank'>
            Verstappen not expecting F1 Belgian GP pole fight with Mercedes duo
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Max Verstappen doubts he will be able to fight with the Mercedes
            drivers for pole position in Belgium despite setting the pace
            through Friday's Formula 1 practice running. Verstappen finished
            just eight-hundredths of a second behind Mercedes' Valtteri Bottas
            in opening practice before setting the fastest time in the afternoon
            session.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Verstappen was able to pip Renault's Daniel Ricciardo to top spot by
            0.048 seconds, with Lewis Hamilton finishing 0.096s off the pace in
            third for Mercedes. But the Red Bull driver did not think his run to
            top spot was a sign he could fight for pole position on Saturday,
            predicting Mercedes would bounce back from its issues. "I personally
            think they're still struggling a bit with their balance," Verstappen
            said of Mercedes.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            "I expect them to be stronger tomorrow. You can see already on the
            long runs they are also very competitive. "I'm not expecting to
            fight for pole position, but if we can be a bit closer, that would
            be good." Verstappen anticipated that the Racing Point cars of
            Sergio Perez and Lance Stroll would be "very close" to Red Bull in
            qualifying.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Verstappen, who downplayed his current position as an
            "overachievement" so far in 2020, was able to beat the Mercedes
            drivers in the 70th Anniversary GP as a combination of softer tyres,
            hot temperatures and the levels of downforce the W11s were producing
            through Silverstone's high-speed and high-energy corners.
          </p>

          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.autosport.com/f1/news/151730/verstappen-not-expecting-pole-fight-with-mercedes'
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
