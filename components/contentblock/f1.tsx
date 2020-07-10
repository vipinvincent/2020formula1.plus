import React from 'react'
import ActionLink from 'components/link/ActionLink'
import ContentLink from 'components/link/ContentLink'

const F1: React.FC = () => {
  return (
    <div className='relative bg-white-100 rounded-tl-xxl rounded-br-xxl shadow'>
      <div className='h-32 sm:h-84 w-full'>
        <img
          className='w-full h-full object-cover rounded-tl-xxl'
          src='https://www.formula1.com/content/dam/fom-website/sutton/2020/Austria/Saturday/1254271578.jpg.transform/9col-retina/image.jpg'
          alt='Red Bull’s power unit fix by Honda'
        />
      </div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='px-4 py-4 text-left'>
          <div className='text-base leading-6 font-semibold uppercase tracking-wider text-secondary-on'>
            Formula1.com
          </div>
          <ActionLink
            href='https://www.formula1.com/en/latest/article.vettel-says-hed-take-red-bull-seat-if-offered-but-verstappen-would-prefer-to.6rC5OsifstIe237yLfl2FT.html'
            target='_blank'>
            Vettel says he’d take Red Bull seat if offered – but Verstappen sees
            no reason not to stick with Albon
          </ActionLink>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Will Sebastian Vettel be on the F1 grid in 2021? And if so, will it
            be with a team capable of winning races? Those are the questions
            fans have been asking since it was announced he would be leaving
            Ferrari at the end of this season. Yesterday the door to an opening
            at Renault slammed shut with the news Fernando Alonso was returning
            to partner Esteban Ocon – so what of the possibility of a move back
            to Red Bull, with whom he won his four world titles?
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            Speaking ahead of this weekend’s Styrian Grand Prix, Vettel admitted
            great affection for his former team, even going so far as to say
            he’d accept the offer of a seat with the team if it arrived.
            “Generally I’m of the conviction that if you want to win you have to
            be happy to take on anyone,” said Vettel, who also confirmed that
            he’d had no solid conversations with Renault about a move. “I know
            the team very, very well from my past, so of course I am still in
            contact with a lot of people there whether Christian [Horner, Team
            Principal], Helmut [Marko, Red Bull advisor] or others.
          </p>
          <p className='mt-1 mb-1 text-base leading-normal text-gray-700'>
            “Red Bull has a winning car, they are a very strong team. I know how
            strong they are from the past. "It’s not fair to say I know the team
            inside out because it has also changed and moved on, but I know why
            they were strong back then and they are still an F1 contender and
            it’s a car that you can win races in, so for sure that would be
            interesting.”
          </p>
          <p className='mt-1 text-base leading-normal text-gray-700'>
            Visit{' '}
            <ContentLink
              href='https://www.formula1.com/en/latest/article.vettel-says-hed-take-red-bull-seat-if-offered-but-verstappen-would-prefer-to.6rC5OsifstIe237yLfl2FT.html'
              target='_blank'>
              formula1.com
            </ContentLink>{' '}
            for more details...
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-start border-t border-gray-200 pb-2 md:py-3 px-4 text-sm md:text-lg text-center md:text-left'>
          <div className='w-full text-sm md:w-3/12 pb-2 md:pb-0 md:pr-4'>
            Follow this topic on -
          </div>
          <div className='w-full flex flex-row justify-center md:justify-start md:w-9/12'>
            <div className='mr-2'>
              <ActionLink
                href='https://www.skysports.com/f1/news/24182/12025015/sebastian-vettel-confirms-renault-talks-would-say-yes-to-red-bull'
                target='_blank'>
                <img
                  className='w-auto ull h-8 object-contain rounded'
                  src='https://lh3.googleusercontent.com/-cIoEETaueLkWYUbAizN98H20ES55XwYqvjRwyP7tZPFy4Yrf6xMruUulOooEe47_pU'
                  alt='skysports.com'
                />
              </ActionLink>
            </div>
            <div className='mr-2'>
              <ActionLink
                href='https://the-race.com/formula-1/vettel-on-a-red-bull-return-renault-talks-and-2021-options/'
                target='_blank'>
                <img
                  className='w-auto ull h-8 mt-0 p-2 object-contain rounded bg-gray-800'
                  src='https://cdn.the-race.com/wp-content/uploads/2020/02/02055753/the-race-logo-full-white.png'
                  alt='the-race.com'
                />
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default F1
