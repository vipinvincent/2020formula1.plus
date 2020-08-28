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
            href='https://www.autosport.com/f1/news/151720/hamilton-keeping-an-eye-on-title-runner-red-bull'
            target='_blank'>
            Hamilton "absolutely" keeping an eye on F1 "title runner" Red Bull
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Lewis Hamilton says he will "absolutely keep my eye" on Max
            Verstappen and Red Bull's potential threat in Formula 1's 2020 title
            fight, warning Mercedes must "stay on our toes".
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Verstappen is 37 points behind Hamilton after the opening six races
            of the 2020 season - ahead of Valtteri Bottas in second place in the
            drivers' standings - and has been the only driver regularly able to
            keep pace with the Mercedes duo so far in the campaign. The Red Bull
            driver is six points ahead of Bottas after the latter's puncture at
            the end of the British GP, and because he was able to finish ahead
            of him after the Finn's poor starts in Hungary and Spain.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            When asked if he views Verstappen as a genuine title threat for the
            rest of 2020, Hamilton said: "You take the first race away with Max
            having the DNF, I think if you look at the results, we would be very
            close in points still. "So in my mind they are [a title threat], and
            obviously they've had very strong results. "And they're getting
            closer and races. Maybe in qualifying we do have the edge. But let's
            say when it comes to the race, we're generally a lot closer. "We're
            not even halfway through the season. And so, I absolutely keep my
            eye on them. I think they still are a title runner. We need to stay
            on our toes."
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
              href='https://www.autosport.com/f1/news/151720/hamilton-keeping-an-eye-on-title-runner-red-bull'
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
