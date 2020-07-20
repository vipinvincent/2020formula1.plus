import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const TheRace: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow mt-4'>
      <div className='h-32 sm:h-40 lg:absolute lg:left-0 lg:h-full lg:w-1/3'>
        <img
          className='w-full h-full object-contain rounded-tl-xxl bg-gray-800 px-8 py-8'
          src='https://res.cloudinary.com/f1plus/image/upload/q_auto/v1594826932/contentImages/logo/therace_cq3ao6.png'
          alt='the-race.com'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='lg:ml-auto lg:w-2/3 px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            the-race.com
          </div>
          <ActionLink
            href='https://the-race.com/formula-1/why-the-styrian-gp-proved-ferrari-has-backed-the-right-driver/'
            target='_blank'>
            Why the Styrian GP proved Ferrari has backed the right driver
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            In the wake of the Styrian Grand Prix, I am more convinced than ever
            that Charles Leclerc is the right driver to lead Ferrari. The move
            which caused his opening-lap shunt with team-mate Sebastian Vettel
            at Turn 3 was rash, but his reaction afterward was the complete
            opposite. The Monegasque was calm and measured, belying his 22
            years.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Having qualified down in 11th and been demoted a further three
            places for blocking in qualifying, Leclerc must have been seething
            on the grid, wondering how it had all gone so wrong at a circuit
            where he finished second last week and almost won last year. He was
            simply too eager at the start, lunging up the inside of Vettel for a
            gap that was always going to slam shut on him. They were already
            three abreast going into that corner where you always get a slight
            funnel effect anyway, so there was never going to be enough room for
            Leclerc.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            It was the move of a driver who is just two races into his third
            full season in F1 and is still learning. But, just because he is at
            Ferrari, that fact shouldn’t be forgotten. Faced with that situation
            again in future, he will see the bigger picture in the race and the
            championship – ‘there are three cars going into the corner so, even
            if it means I come under pressure from behind, I’m going to hang
            back to get the best run out of the corner down the straight to set
            up a better chance to attack’.
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://the-race.com/formula-1/why-the-styrian-gp-proved-ferrari-has-backed-the-right-driver/'
              target='_blank'>
              the-race.com
            </ContentLink>{' '}
            for More Details...
          </p>
        </div>
      </div>
    </div>
  )
}
export default TheRace
