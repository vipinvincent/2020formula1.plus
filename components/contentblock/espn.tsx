import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const ESPN: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 w-full'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-espn'
          src='https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png'
          alt='espn.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            espn.com
          </div>
          <ActionLink
            href='https://www.espn.in/f1/story/_/id/29441122/where-mercedes-pace-gone-red-bull-step-forward-genuine'
            target='_blank'>
            Friday analysis: Where has Mercedes' pace gone? Is Red Bull's step
            forward genuine?
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Albert Einstein once defined insanity as doing the same thing over
            and over while expecting different results. Based on that logic,
            predicting anything other than a Mercedes win at this weekend's race
            in Austria -- the second in as many weeks to be held at the Red Bull
            Ring -- just might validate Einstein's poin
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Yet the raw data from Friday practice for Sunday's Styrian Grand
            Prix suggests Red Bull are now the favourites and Mercedes has
            slipped to second. That's a big turnaround from this time last week,
            when Mercedes finished Friday with a 0.6s advantage over the rest of
            the field and looked to have a comfortable margin in the race
            despite regular Safety Cars.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            This week, Mercedes' best time in the second practice was another
            0.6s faster than the equivalent session seven days ago, but Red Bull
            has found over twice as much to move Max Verstappen 0.043s clear of
            Valtteri Bottas at the front of the field.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.espn.in/f1/story/_/id/29441122/where-mercedes-pace-gone-red-bull-step-forward-genuine'
              target='_blank'>
              espn.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default ESPN
