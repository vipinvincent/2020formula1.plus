import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const MotorSport: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3 bg-black-100 rounded-tl-xl'>
        <img
          className='w-full h-full object-contain rounded-tl-xl'
          src='https://cdn-1.motorsport.com/static/custom/general-motorsport-com-team-2015-motorsport-com-logo.jpg'
          alt='motorsport.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 pt-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            motorsport.com
          </div>
          <ActionLink
            href='https://www.motorsport.com/f1/news/red-bull-undecided-wing-styrian-gp/4827426/'
            target='_blank'>
            Red Bull undecided on nose concept for Styrian GP
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Red Bull is undecided on which specification of nose to run with at
            the Styrian Grand Prix, after going different ways with its two
            drivers last weekend. Max Verstappen ran with a new concept of nose
            (inset in the main image) over the Austria weekend while Alex Albon
            remained with the original version. The team wants to have both cars
            running in the same specification for the second race in Austria,
            but needs to go through the data from the weekend to get a
            definitive answer on which one it thinks has the best potential.
            "The spec difference was more about characteristics than outright
            performance," explained Red Bull team boss Christian Horner. "Both
            drivers will converge on to the same spec next week, but at the
            moment we're unsure whether it'll be Alex's spec or Max's spec. We
            need to really look and focus at the data on that."
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.motorsport.com/f1/news/red-bull-undecided-wing-styrian-gp/4827426/'
              target='_blank'>
              motorsport.com
            </ContentLink>{' '}
            for more details...
          </p>
          <div className='flex flex-col justify-start border-t border-gray-200 mt-4 py-2  px-2 text-sm  text-center'>
            <div className='w-full pb-2 text-sm'>Follow this topic on -</div>
            <div className='w-full flex flex-row justify-center my-1'>
              <div className='mr-2'>
                <ActionLink
                  href='https://www.autosport.com/f1/news/150403/red-bull-undecided-on-new-nose-concept'
                  target='_blank'>
                  <img
                    className='w-auto ull h-8 object-contain rounded'
                    src='https://i1.sndcdn.com/avatars-000304785988-u42e59-t500x500.jpg'
                    alt='autosport.com'
                  />
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MotorSport
