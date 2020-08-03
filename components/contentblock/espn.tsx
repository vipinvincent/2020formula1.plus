import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const ESPN: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 w-full'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-espn'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826931/contentImages/logo/espn_av2iv1.png'
          alt='espn.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            News
          </div>
          <ActionLink
            href='https://www.espn.in/f1/story/_/id/29507518/red-bull-sees-albon-getting-stronger-stronger'
            target='_blank'>
            Red Bull sees Albon getting stronger and stronger
          </ActionLink>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Red Bull see plenty of untapped potential in Alex Albon and are
            happy with the British-born Thai driver, according to team boss
            Christian Horner.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            Williams driver George Russell defended his friend and rival at the
            weekend's Hungarian Grand Prix, saying he was "being made to look
            like an idiot and he's absolutely not" after Albon qualified 13th.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            The Thai, a Formula One rookie last year alongside established race
            winner Max Verstappen, ultimately put in a strong performance to
            finish fifth while his Dutch team mate was second. "I'm very pleased
            with Alex. He's picked up a bit of criticism which has been very
            harsh on him," Horner told Sky Sports television.
          </p>
          <p className='mt-1 mb-2 text-base leading-normal text-gray-700'>
            "We made a mistake in the timing (in qualifying), we put too much
            pressure on him. We have to take responsibility to that. "He's done
            the passing manoeuvres when he needed to, he's responded very well.
            I really believe that Alex has got a lot more potential that we just
            haven't uncovered yet."
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29507518/red-bull-sees-albon-getting-stronger-stronger'
              target='_blank'>
              espn.com
            </ContentLink>{' '}
            for More Details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default ESPN
