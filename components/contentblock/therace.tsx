import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const TheRace: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-gray-800 px-8 py-8'
          src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
          alt='the-race.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            the-race.com
          </div>
          <ActionLink
            href='https://the-race.com/formula-1/gary-anderson-the-first-glimpse-of-ferraris-hurried-update/'
            target='_blank'>
            McLaren can only battle one Racing Point – Seidl
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Andreas Seidl believes his McLaren team is only in competition with
            one Racing Point this weekend because Sergio Perez is out of reach.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Perez was fastest in first practice for Formula 1’s Styrian Grand
            Prix on Friday, and backed that performance up by going
            third-quickest in FP2.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            That put him four tenths of a second clear of the fastest McLaren of
            Carlos Sainz Jr in fifth, but Sainz was within a tenth of the second
            Racing Point of Lance Stroll.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://the-race.com/formula-1/gary-anderson-the-first-glimpse-of-ferraris-hurried-update/'
              target='_blank'>
              the-race.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default TheRace
